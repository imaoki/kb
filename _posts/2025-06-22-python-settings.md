---
title: Python 設定
date: 2025-06-22 17:48:00 +09:00
updated: 2025-06-27 02:14:00 +09:00
categories: note
tags: maya python vscode
toc: true
published: true
---
Pythonの環境設定。

### ターミナル
{:#terminal}

PowerShellを使用。

#### 実行ポリシーの設定
{:#terminal-powershell-execution-policy}

スクリプト（.ps1）を実行できるように管理者権限でPowerShellを起動して実行ポリシーを設定しておく。
[about_Execution_Policies - PowerShell | Microsoft Learn](https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_execution_policies)

現在の状態を表示
: ```powershell
  Get-ExecutionPolicy -List
  ```

実行可能に設定
: ```powershell
  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

  `Set-ExecutionPolicy-RemoteSigned.bat`
  : ```dos
    @echo off
    echo 実行ポリシーを「RemoteSigned」に設定しています（CurrentUser スコープ）...
    powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"
    echo 設定が完了しました。
    pause
    ```

元に戻す
: ```powershell
  Set-ExecutionPolicy Undefined -Scope CurrentUser
  ```

  `Set-ExecutionPolicy-Undefined.bat`
  : ```dos
    @echo off
    echo 実行ポリシーを「未定義（Undefined）」に戻しています（CurrentUser スコープ）...
    powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy Undefined -Scope CurrentUser -Force"
    echo 元に戻しました。
    pause
    ```

#### コマンドのソース（場所）を確認
{:#terminal-command-source}

```powershell
Get-Command python | Select-Object -ExpandProperty Source
```

### 仮想環境の構築
{:#virtual-environments}

[venv](https://docs.python.org/ja/3/library/venv.html)を使用。

#### 作成
{:#virtual-environments-create}

```powershell
cd my_project
python -m venv .venv
```

#### 有効化
{:#virtual-environments-activate}

```powershell
. ./.venv/Scripts/Activate.ps1
```

#### インタプリタの確認
{:#virtual-environments-interpreter-path}

```powershell
Get-Command python | Select-Object -ExpandProperty Source
```

グローバル環境の場合
: ```powershell
  C:\Users\<UserName>\AppData\Local\Programs\Python\Python311\python.exe
  ```

仮想環境の場合（実際は絶対パス）
: ```powershell
  my_project\.venv\Scripts\python.exe
  ```

#### 無効化
{:#virtual-environments-deactivate}

`deactivate`コマンドが動作しなかったので、以下のスクリプトで対応。

`deactivate-venv.ps1`
: ```powershell
  <#
  .SYNOPSIS
      VSCode や PowerShell 上で仮想環境 (.venv) を明示的に解除するスクリプト。

  .DESCRIPTION
      - $env:VIRTUAL_ENV を解除し、仮想環境の Scripts パスを PATH から除去する。
      - VSCode ターミナルが仮想環境を自動再適用することは防がない（VSCode 側で対応）。
      - PowerShell 専用。bash には未対応。
  #>

  Write-Host ">>> 仮想環境の解除処理を開始します..."

  # 環境変数 VIRTUAL_ENV の存在チェック
  $venvPath = $env:VIRTUAL_ENV

  if (-not $venvPath) {
      Write-Warning "仮想環境は現在アクティブではありません。（VIRTUAL_ENV が未設定）"
      return
  }

  # パスの標準化（バックスラッシュに統一）
  $venvScripts = Join-Path $venvPath "Scripts"

  # PATH から仮想環境の Scripts パスを除去（空要素も除去）
  $originalPath = $env:PATH
  $pathEntries = $originalPath -split ';' | Where-Object { $_.Trim() -ne '' }
  $updatedEntries = $pathEntries | Where-Object {
      $normalizedEntry = $_.TrimEnd('\')
      $normalizedVenvScripts = $venvScripts.TrimEnd('\')
      $normalizedEntry -ne $normalizedVenvScripts
  }
  $updatedPath = $updatedEntries -join ';'
  $env:PATH = $updatedPath

  # 環境変数 VIRTUAL_ENV の削除
  Remove-Item Env:VIRTUAL_ENV -ErrorAction SilentlyContinue

  # プロンプトをリセット
  if (Get-Command prompt -ErrorAction SilentlyContinue) {
      function global:prompt {
          "PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) "
      }
  }

  Write-Host ">>> 仮想環境 [$venvPath] を無効化しました。"

  # 成功確認
  if (-not $env:VIRTUAL_ENV -and $env:PATH -notlike "*$venvScripts*") {
      Write-Host "仮想環境の無効化が完了しました。" -ForegroundColor Green
  } else {
      Write-Warning "仮想環境の無効化が完全ではない可能性があります。"
  }

  Write-Host ">>> 現在の Python 実行ファイル："
  try {
      $pythonPath = Get-Command python -ErrorAction Stop | Select-Object -ExpandProperty Source
      Write-Host "    $pythonPath"
  } catch {
      Write-Warning "Python が見つかりません。システムの PATH を確認してください。"
  }
  ```

実行
: ```powershell
  . ./deactivate-venv.ps1
  ```

ターミナルの仮想環境を無効化してもPythonファイルのタブを選択すると仮想環境のままになっていたりするが、これはVSCodeの仮想環境の仕組みによるもの。

![python-select-interpreter](/kb/assets/images/content/2025-06-22-python-settings/python-select-interpreter.png)

[仮想環境の管理](#vscode-virtual-environment-management)を参照。

### mayapy
{:#mayapy}

MayaのPythonインタプリタ。
Mayaセッション外でMayaのPythonモジュールを使用するために必要。
ユーザー環境変数`Path`に`mayapy`のパスを追加しておく。

Maya 2022の場合
: `C:\Program Files\Autodesk\Maya2022\bin`

#### 使い方
{:#mayapy-usage}

スクリプト（.py）を実行
: ```powershell
  mayapy example.py
  ```

  または

  ```powershell
  mayapy -m example
  ```

  `-m`はモジュールとして実行するためのオプション。

#### Maya Pythonモジュールの使用方法
{:#mayapy-how-to-use-maya-python-modules}

```python
# 初期化
try:
    import maya.standalone
    maya.standalone.initialize()
except RuntimeError:
    pass

# ここに処理を記述
import maya.cmds as cmds
print(f"selection:{cmds.ls(selection=True)}")

# 初期化解除
try:
    import maya.standalone
    maya.standalone.uninitialize()
except Exception:
    pass
```

### テスト
{:#test}

[pytest](https://github.com/pytest-dev/pytest/)を使用。

インストール
: 仮想環境
  : ```powershell
    pip install pytest
    ```

  mayapy
  : ```powershell
    mayapy -m pip install pytest
    ```

確認方法
: ```powershell
  pip show pytest
  ```

  Pythonのバージョンによって異なるバージョンがインストールされる点に注意。

使用方法
: ファイル
  : ```powershell
    pytest -v tests/example.py
    ```

  フォルダ
  : ```powershell
    pytest -v tests
    ```

### コード補完
{:#code-completion}

[maya-stubs](https://github.com/Muream/maya-stubs)を使用。

インストール
: VSCodeの問題なので仮想環境のみでよい。

  ```powershell
  pip install maya-stubs
  ```

確認方法
: ```powershell
  pip show maya-stubs
  ```

設定
: [ワークスペース](#vscode-workspace-settings)で設定。

### Visual Studio Code
{:#vscode}

#### 拡張
{:#vscode-extension}

* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
  以下も自動的にインストールされる。
  [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
  [Python Debugger](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy)

* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

#### ユーザー設定
{:#vscode-user-settings}

##### Pylance
{:#vscode-user-settings-pylance}

インレイヒント
: ```json
  {
    "python.analysis.inlayHints.callArgumentNames": "partial",
    "python.analysis.inlayHints.functionReturnTypes": true,
    "python.analysis.inlayHints.pytestParameters": true,
    "python.analysis.inlayHints.variableTypes": true
  }
  ```

型チェックのレベル
: ```json
  {
    "python.analysis.typeCheckingMode": "strict"
  }
  ```

#### ワークスペース設定
{:#vscode-workspace-settings}

```json
{
  "folders": [
    {
      "name": "foo/bar",
      "path": "..\\foo\\bar"
    },
    {
      "name": "Maya2022/scripts",
      "path": "C:\\Program Files\\Autodesk\\Maya2022\\scripts"
    }
  ],
  "settings": {
    "files.readonlyInclude": {
      "C:\\Program Files\\Autodesk\\Maya2022\\scripts\\**": true
    },
    "python.analysis.extraPaths": [
      "C:\\Program Files\\Autodesk\\Maya2022\\Python37\\Lib\\site-packages",
      "${workspaceFolder:foo/bar}\\.venv\\Lib\\site-packages"
    ],
    "python.defaultInterpreterPath": "${workspaceFolder:foo/bar}\\.venv\\Scripts\\python.exe",
    "python.terminal.activateEnvInCurrentTerminal": true,
    "python.terminal.activateEnvironment": true,
    "terminal.integrated.cwd": "${workspaceFolder:foo/bar}",
    "terminal.integrated.env.windows": {
      "PATH": "${workspaceFolder:foo/bar}\\.venv\\Scripts;${env:PATH}"
    },
    "terminal.integrated.persistentSessionReviveProcess": "never"
  }
}
```

* パス形式
  `${workspaceFolder:foo/bar}`がVSCode内部で展開される際の形式に合わせてWindows形式で記述する。

* 型チェック/コード補完
  Pylanceをインストール済みの場合は、`python.analysis.extraPaths`のみでよい。
  `python.autoComplete.extraPaths`は古いPython言語サーバー用なので不要。

#### 仮想環境の管理
{:#vscode-virtual-environment-management}

VSCode本体とVSCode内ターミナルの仮想環境はそれぞれ独立して管理されている。

VSCode本体（Python拡張機能）
: 用途
  : コードの入力支援、リンティング、デバッグ、Pythonファイル実行

  設定方法
  : `Python: Select Interpreter`コマンド、または`python.defaultInterpreterPath`

VSCode内ターミナル
: 用途
  : 手動でのコマンド実行、pip install、スクリプト実行など

  設定方法
  : 環境変数（PATH）、アクティベーションスクリプト、`terminal.integrated.env.windows`によるPATH制御

**重要なポイント**
{:.note}

* VSCode本体が仮想環境Aを使用していても、ターミナルは仮想環境Bを使用することが可能。

* それぞれ別々に設定する必要がある。

Pythonファイル実行時の動作
: | 実行方法                                           | 動作                   |
  | -------------------------------------------------- | ---------------------- |
  | VSCodeのPython実行ボタン（右上角の三角形のボタン） | VSCode本体の設定を使用 |
  | ターミナルで`python script.py`                     | ターミナルの環境を使用 |

<!-- #### プロジェクト設定
{:#vscode-project-settings} -->
