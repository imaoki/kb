---
title: Photoshop 設定
date: 2021-01-29 17:47:00
updated: 2024-10-12 14:27:00
categories: note
tags: photoshop
toc: true
published: true
---
Photoshopの設定。

### 環境設定
{:#preferences}

設定ファイル
: `Users\<ユーザー名>\AppData\Roaming\Adobe\Adobe Photoshop <バージョン>\Adobe Photoshop <バージョン> Settings\Adobe Photoshop <バージョン> Prefs.psp`

| カテゴリ       | 項目                                             | 値      |
| -------------- | ------------------------------------------------ | ------- |
| 一般           | ホーム画面を自動表示                             | オフ    |
| 一般           | 従来の「新規ドキュメント」インターフェイスを使用 | `True`  |
| ワークスペース | タブでドキュメントを開く                         | `False` |
| ツール         | オーバースクロール                               | `True`  |
| ツール         | フリックパンを有効にする                         | `False` |
| ツール         | 変形ツールを使用するときに基準点を表示           | `True`  |
| パフォーマンス | ヒストリー数                                     | `200`   |

### プリセット
{:#presets}

#### アクション
{:#presets-actions}

設定ファイル
: `Users\<ユーザー名>\AppData\Roaming\Adobe\Adobe Photoshop <バージョン>\Presets\Actions\<設定名>.atn`

#### ブラシ
{:#presets-brushes}

設定ファイル
: `Users\<ユーザー名>\AppData\Roaming\Adobe\Adobe Photoshop <バージョン>\Presets\Brushes\<設定名>.abr`

#### キーボードショートカット
{:#presets-keyboard-shortcuts}

設定ファイル
: `Users\<ユーザー名>\AppData\Roaming\Adobe\Adobe Photoshop <バージョン>\Presets\Keyboard Shortcuts\<設定名>.kys`

| エリア | コマンド       | ショートカット |
| ------ | -------------- | -------------- |
| ツール | ぼかしツール   | `R`{:.key}     |
| ツール | シャープツール | `R`{:.key}     |
| ツール | 指先ツール     | `R`{:.key}     |

### ツール設定
{:#tool-settings}

移動ツール
: 自動選択
  : オフ

ブラシツール
: 不透明度に常に筆圧を使用する
  : オン

  サイズに常に筆圧を使用する
  : オン

### トラブルシューティング
{:#troubleshooting}

#### 筆圧感知が効かない
{:#troubleshooting-pressure-sensitivity-not-working}

`PSUserConfig.txt`を作成しバージョン毎の設定フォルダにコピーする。

設定フォルダ
: ```
  C:\Users\<ユーザー名>\AppData\Roaming\Adobe\Adobe Photoshop <バージョン>\Adobe Photoshop <バージョン> Settings
  ```

`PSUserConfig.txt`の内容
: ワコムタブレットのデジタルインク機能を使用しない場合

  ```
  # Use WinTab
  UseSystemStylus 0
  ```

参考
: [タブレットの設定について（Photoshop CC）](https://helpx.adobe.com/jp/photoshop/kb/cq08110039.html)

#### 起動エラー
{:#troubleshooting-startup-error}

起動すると「回復不能な問題が発生しました。」や、「Photoshopを初期化できません。」といったエラーが発生して起動できない場合は以下を試す。

* 起動直後に`Ctrl+Alt+Shift`{:.key}を押して設定ファイルを削除する。

* 設定ファイルの削除で効果が無ければ設定フォルダを削除する。

  ```
  C:\Users\<ユーザー名>\AppData\Roaming\Adobe\Adobe Photoshop <バージョン>\Adobe Photoshop <バージョン> Settings
  ```

* それでも起動しない場合は再インストールする。

#### PNGの保存ができない
{:#troubleshooting-cannot-save-png}

半透明画像を保存する際にファイルの種類にPNGが出てこない場合は以下の設定を変更する。

環境設定 > ファイル管理 > ファイルの保存オプション > 従来の「別名で保存」を有効にする
: オン
