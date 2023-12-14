---
title: Maya 設定
date: 2023-04-06 01:27:00
updated: 2023-12-14 10:51:00
categories: note
tags: maya
toc: true
published: true
---
Mayaの設定。

### Preferences
{:#preferences}

| カテゴリ  | サブカテゴリ   | グループ               | 項目                                          | 値                |
| --------- | -------------- | ---------------------- | --------------------------------------------- | ----------------- |
| Interface | UI Elements    | Panel Configurations   | When opening: Restore saved layouts from file | `false`           |
| Display   |                | Performance            | Render swatches(startup)                      | `false`           |
| Display   | Manipulators   | Manipulator Visibility | Hide Manipulator: When Ctrl is held           | `true`            |
| Display   | Manipulators   | Manipulator Visibility | Hide Manipulator: When Shift is held          | `true`            |
| Display   | Manipulators   | Manipulator Visibility | Hide Manipulator: When Ctrl+Shift is held     | `true`            |
| Settings  | Files/Projects | AutoSave               | Enable                                        | `true`            |
| Settings  | Files/Projects | AutoSave               | Limit autosaves                               | `true`            |
| Settings  | Files/Projects | AutoSave               | Number of autosaves                           | `20`              |
| Settings  | Files/Projects | AutoSave               | Interval (minutes)                            | `5`               |
| Settings  | Selection      | Modifiers              | Selection Child Highlighting                  | `Never highlight` |
| Settings  | Time Slider    | Playback               | Update view                                   | `All`             |

### Hotkey
{:#hotkey}

| Application Command           | Runtime Command       | HotKey                    |
| ----------------------------- | --------------------- | ------------------------- |
| Cycle Display Mode            | CycleDisplayMode      |                           |
| Hierarchy                     | SelectHierarchy       | `Ctrl+Alt+Shift+S`{:.key} |
| Match All Transforms (Option) | MatchTransformOptions | `Alt+A`{:.key}            |
| Object Xray TGL               | dr_objectXrayTGL      | `Ctrl+Alt+Shift+X`{:.key} |
| Pick Color Activate           | PickColorActivate     |                           |
| Pick Color Deactivate         | PickColorDeactivate   |                           |
| Play Range End                | GoToMaxFrame          | `Alt+L`{:.key}            |
| Play Range Start              | GoToMinFrame          | `Alt+K`{:.key}            |
| Playback Toggle               | PlaybackToggle        | `/`{:.key}                |

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

#### 英語版で起動
{:#troubleshooting-launch-in-english}

システムのプロパティ>詳細設定から以下のシステム環境変数を追加する。

| 変数名             | 値      |
| ------------------ | ------- |
| `MAYA_UI_LANGUAGE` | `en_US` |

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
    UserRepo ${XGEN_CONFIG_PATH}/xgen
    ```

  これらの設定を行った上でMayaを起動すると以下の場所に`xgen`ディレクトリが作成される。
  `C:\Users\<ユーザー名>\OneDrive\Data\Maya\2024\xgen`

#### ペンタブのサイドスイッチに割り当てた右クリックが効かない
{:#troubleshooting-rightclick-assigned-to-sideswitch-of-pentab-not-working}

ワコムタブレットのプロパティ > マッピングタブ > デジタルインク機能を使う
: オフ

参考
: [Wacomデバイスを使用したMayaおよび3ds Maxでは、マウスの右ボタンとホットキーが機能しない](https://www.autodesk.co.jp/support/technical/article/caas/sfdcarticles/sfdcarticles/JPN/In-Maya-2020-and-2022-the-right-mouse-button-on-a-Ciniq-tablet-is-not-working.html)
