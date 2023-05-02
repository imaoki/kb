---
title: Maya 設定
date: 2023-04-06 01:27:00
updated: 2023-05-02 21:27:00
categories: note
tags: maya
toc: true
published: true
---
Mayaの設定。

### Preferences
{:#preferences}

| カテゴリ | サブカテゴリ   | グループ  | 項目                         | 値                |
| -------- | -------------- | --------- | ---------------------------- | ----------------- |
| Settings | Files/Projects | AutoSave  | Enable                       | `true`            |
| Settings | Files/Projects | AutoSave  | Limit autosaves              | `true`            |
| Settings | Files/Projects | AutoSave  | Number of autosaves          | `100`             |
| Settings | Files/Projects | AutoSave  | Interval (minutes)           | `5`               |
| Settings | Selection      | Modifiers | Selection Child Highlighting | `Never highlight` |

### Hotkey
{:#hotkey}

| Application Command | Runtime Command  | HotKey                    |
| ------------------- | ---------------- | ------------------------- |
| Hierarchy           | SelectHierarchy  | `Ctrl+Alt+Shift+S`{:.key} |
| Object Xray TGL     | dr_objectXrayTGL | `Ctrl+Alt+Shift+X`{:.key} |

### Tool Settings
{:#tool-settings}

#### Tumble Tool
{:#tool-settings-tumble-tool}

View > Camera Tools > Tumble Tool 🗖

Tumble about
: `Tumble pivot`

Automatically set tumble pivot
: `true`

### トラブルシューティング
{:#troubleshooting}

#### ペンタブのサイドスイッチに割り当てた右クリックが効かない
{:#troubleshooting-rightclick-assigned-to-sideswitch-of-pentab-not-working}

ワコムタブレットのプロパティ > マッピングタブ > デジタルインク機能を使う
: オフ

参考
: [Wacomデバイスを使用したMayaおよび3ds Maxでは、マウスの右ボタンとホットキーが機能しない](https://www.autodesk.co.jp/support/technical/article/caas/sfdcarticles/sfdcarticles/JPN/In-Maya-2020-and-2022-the-right-mouse-button-on-a-Ciniq-tablet-is-not-working.html)

#### XGenのOneDrive対策
{:#troubleshooting-onedrive-measures-for-xgen}

日本語版WindowsでOneDriveを使用する場合、ドキュメントのパスに日本語が含まれるのでアプリケーションディレクトリを変更する必要がある。
また、それだけではMayaを起動する度にOneDriveのルートディレクトリに同期を妨げる文字を含んだディレクトリが生成され、エクスプローラが再起動を繰り返すのでその対策も行う。

アプリケーションディレクトリの変更
: システムのプロパティ>詳細設定から以下のシステム環境変数を追加する。

  | 変数名         | 例                                         |
  | -------------- | ------------------------------------------ |
  | `MAYA_APP_DIR` | `C:\Users\<ユーザー名>\OneDrive\Data\Maya` |

  上記設定により生成される Maya.env のパスは次のようになる。
  `C:\Users\<ユーザー名>\OneDrive\Data\Maya\2024\Maya.env`

XGen設定ファイルのパスを設定
: Maya.env に以下の環境変数を加える

  | 変数名             | 例                                       |
  | ------------------ | ---------------------------------------- |
  | `XGEN_CONFIG_PATH` | `XGEN_CONFIG_PATH = %MAYA_APP_DIR%\2024` |

  `XGEN_CONFIG_PATH`に指定したディレクトリに`config.txt`を作成し`UserRepo`のパスを指定する。

  `config.txt`の中身
  : ```
    UserRepo /xgen
    ```
