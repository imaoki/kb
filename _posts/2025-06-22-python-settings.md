---
title: Python 設定
date: 2025-06-22 17:48:00 +09:00
updated:
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
Get-Command git | Select-Object -ExpandProperty Source
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
. .venv/Scripts/Activate.ps1
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
      - $env:VIRTUAL_ENV を解除し、仮想環境の Scripts パスを PATH から除去します。
      - VSCode ターミナルが仮想環境を自動再適用することは防ぎません（VSCode 側で対応）。
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
  $escapedVenvScripts = [Regex]::Escape($venvScripts)

  # PATH から仮想環境の Scripts パスを除去
  $originalPath = $env:PATH
  $updatedPath = ($originalPath -split ';') -notmatch "^$escapedVenvScripts\\?$" -join ';'
  $env:PATH = $updatedPath

  # 環境変数 VIRTUAL_ENV の削除
  Remove-Item Env:VIRTUAL_ENV -ErrorAction SilentlyContinue

  Write-Host ">>> 仮想環境 [$venvPath] を無効化しました。"
  Write-Host ">>> 現在の Python 実行ファイル："
  Get-Command python | Select-Object -ExpandProperty Source
  ```

実行
: ```powershell
  . ./deactivate-venv.ps1
  ```

ターミナルで無効化できてもPythonファイルのタブを選択すると仮想環境のままになっていたりするが、これはVSCodeのPython拡張が持っている仮想環境を自動検出する仕組みによるものらしい。

![python-select-interpreter](/kb/assets/images/content/2025-06-22-python-settings/python-select-interpreter.png)

ややこしいのでVSCode側は手動で切り替えて対応する。

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
      "name": "my_project",
      "path": "../my_project"
    },
    {
      "name": "Maya2022/scripts",
      "path": "C:/Program Files/Autodesk/Maya2022/scripts"
    }
  ],
  "settings": {
    "files.readonlyInclude": {
      "C:/Program Files/Autodesk/Maya2022/scripts/**": true
    },
    "python.defaultInterpreterPath": "${workspaceFolder}/.venv/Scripts/python.exe",
    "python.analysis.extraPaths": [
      "C:/Program Files/Autodesk/Maya2022/Python37/Lib/site-packages",
      "${workspaceFolder}/.venv/Lib/site-packages"
    ],
    "terminal.integrated.cwd": "${workspaceFolder}",
    "terminal.integrated.persistentSessionReviveProcess": "never"
  }
}
```

型チェック/コード補完
: Pylanceをインストール済みの場合は、`python.analysis.extraPaths`のみでよい。
  `python.autoComplete.extraPaths`は古いPython言語サーバー用なので不要。

<!-- #### プロジェクト設定
{:#vscode-project-settings} -->
