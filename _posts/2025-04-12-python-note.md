---
title: Pythonノート
date: 2025-04-12 20:51:00 +09:00
updated:
categories: note
tags: maya python
toc: true
published: true
---
Python学習メモ。

### スコープ
{:#scope}

#### LEGBルール
{:#scope-legb}

Local
: 関数やメソッドの中で定義された名前。呼び出し毎に生成されその関数の実行が終わると破棄される。

Enclosing
: ネストした関数の場合、内側の関数から外側の関数の名前を参照できる。外側の関数のスコープは内側の関数に大してクロージャとして機能する。

Global
: モジュールレベルで定義された名前。各モジュールは独自のグローバル名前空間を持ち、同じモジュール内ではどこからでもアクセスできる。
  関数内でグローバル変数に値を代入する場合は予め`global`宣言を行う必要がある。

  ```python
  hoge = 1 # グローバル変数
  def update_hoge():
    global hoge # グローバル宣言してから
    hoge = 2
  ```

Builtins
: Pythonが提供する組み込み関数や例外等の名前。`print()`や`len()`等。

#### 変数のスコープと寿命
{:#scope-variable-and-lifetime}

##### ローカル変数
{:#scope-variable-and-lifetime-local}

定義場所
: 関数、メソッド内で定義される変数。

スコープ
: 定義された関数またはメソッドの内部に限定される。

寿命
: 関数呼び出しの開始時に作成され、終了とともに破棄される。

##### グローバル変数
{:#scope-variable-and-lifetime-global}

定義場所
: モジュールのトップレベルで定義される変数。

スコープ
: 同じモジュール内であればどこからでも参照可能。他のモジュールからはインポートによってアクセスする。

寿命
: モジュールが読み込まれている間は存在し続ける。

#### 関数のスコープ
{:#scope-function}

関数のローカルスコープ
: 関数が呼び出されると、その呼び出し毎に新しいローカル名前空間が生成され、関数内で定義された名前はその中でのみ有効となる。

エンクロージングスコープ
: 関数内部でさらに関数が定義されている場合、内側の関数は外側の関数で定義された名前にアクセスが可能。外側の変数は読み取り専用であり、書き換えたい場合は`nonlocal`キーワードを使用する。

#### クラスのスコープ
{:#scope-class}

クラス定義のスコープ
: クラス定義内で直接定義された変数やメソッドは、クラスの名前空間に保存される。
  例えばクラス変数はクラス全体で共有され、インスタンス間で共通の値を保持する。

クラス内のメソッド
: インスタンスメソッド（通常の関数）として定義された場合、呼び出す度に新しいローカル名前空間が作られ、引数やローカル変数はそのスコープでのみ有効となる。

インスタンス属性
: 一般的にはコンストラクタ（`__init__`）内で`self.attribute`として定義される属性。
  そのインスタンスに紐付けられ、インスタンスが参照され続ける限り存続する。インスタンス毎に別々に存在するため、クラス変数とは別管理になる。

#### パッケージとモジュール
{:#scope-package-and-module}

パッケージ
: 複数のモジュールをまとめるディレクトリ。

  `__init__.py`はパッケージの表面的な名前空間を構築する役割を担っている。
  ここでの表面的な名前空間とは、ユーザーがパッケージをインポートした際に、直接アクセスできる名前の集合を指す。

モジュール
: 各`.py`ファイルは一つのモジュールとしてみなされ、その中で定義された変数、関数、クラスはモジュールのグローバル名前空間に所属する。
  モジュールは初回のインポート時に実行され、そのグローバルな名前はプログラム実行中（モジュールが参照され続ける間）保持される。

#### 隠蔽とカプセル化
{:#scope-hiding-and-encapsulation}

* 名前の先頭に`_`を付ける方法

* `__all__`を使用して公開APIを明示する方法

  ```python
  from package.module_a import ClassA
  from package.module_b import function_b

  __all__ = ["ClassA", "function_b"]
  ```

小規模なパッケージやモジュールでは`_`を付ける方法で十分。
ライブラリ等のコードベースで利用されることが前提の場合は`__all__`を使用して公開APIを明示することが望ましい。

### 命名規則
{:#naming-conventions}

| 種別                 | 規則                                                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| パッケージ           | 全て小文字。                                                                                                                                               |
| モジュール           | 全て小文字。必要に応じて`_`で区切る。                                                                                                                      |
| クラス               | パスカルケース。                                                                                                                                           |
| 例外                 | パスカルケース。末尾に`Error`を付ける。                                                                                                                    |
| 関数                 | スネークケース。                                                                                                                                           |
| 変数                 | スネークケース。                                                                                                                                           |
| グローバル変数       | スネークケース。必要に応じて先頭に`_`を付ける。                                                                                                            |
| メソッド             | スネークケース。非公開の場合は先頭に`_`を付ける。                                                                                                          |
| インスタンス変数     | スネークケース。非公開の場合は先頭に`_`を付ける。                                                                                                          |
| 関数とメソッドの引数 | インスタンスメソッドの最初の引数は常に`self`を使用する。<br>クラスメソッドの最初の引数は常に`cls`を使用する。<br>予約語と衝突する場合は末尾に`_`を付ける。 |
| 定数                 | 全て大文字。単語を`_`で区切る。                                                                                                                            |

#### 可視性
{:#naming-conventions-visibility}

* 明示的に可視性を制御する仕組みは無い。

* 名前の付け方による慣習的な方法

  | 名前       | 意味                                                                               |
  | ---------- | ---------------------------------------------------------------------------------- |
  | `name`     | 公開                                                                               |
  | `_name`    | 内部使用（アクセスは可）。`from M import *`でインポートされない。                  |
  | `name_`    | Pythonキーワードとの衝突を避ける                                                   |
  | `__name`   | クラス属性用。継承において名前の衝突を避けるためのもの。ベースクラス側で使用する。 |
  | `__name__` | Pythonの特殊オブジェクトまたは属性。勝手に付けてはいけない。                       |

* モジュール内で公開する名前を指定する方法

  `__all__`という変数を使用して公開する名前を指定する。

  ```python
  __all__ = ["hoge", "piyo"]
  ```

### ツール設定
{:#tool-settings}

#### Visual Studio Code
{:#tool-settings-vscode}

##### 拡張
{:#tool-settings-vscode-extension}

* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
  以下も自動的にインストールされる。
  [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
  [Python Debugger](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy)

* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

##### 設定
{:#tool-settings-vscode-settings}

* PylanceのreportMissingImportsを解消する。

  ![pylance-reportmissingimports](/kb/assets/images/content/2025-04-12-python-note/pylance-reportmissingimports.png)

  Python > Analysis: Extra Paths
  : ```json
    "python.analysis.extraPaths": [
      "C:/Program Files/Autodesk/Maya2022/Python37/Lib/site-packages"
    ]
    ```

* オートコンプリート

  Auto Complete: Extra Paths
  : ```json
    "python.autoComplete.extraPaths": [
      "C:/Program Files/Autodesk/Maya2022/Python37/Lib/site-packages"
    ]
    ```

  スタブファイル？が必要らしく不完全。要調査。
