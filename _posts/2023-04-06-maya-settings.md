---
title: Maya 設定
date: 2023-04-06 07:14:00
updated:
categories: note
tags: maya
toc: true
published: true
---
Mayaの設定。

### XGenのOneDrive対策
{:#onedrive-measures-for-xgen}

日本語版WindowsでOneDriveを使用する場合、ドキュメントのパスに日本語が含まれるのでアプリケーションディレクトリを変更する必要がある。
また、それだけではMayaを起動する度にOneDriveのルートディレクトリに同期を妨げる文字を含んだディレクトリが生成され、エクスプローラが再起動を繰り返すのでその対策も行う。

システム環境変数
: | 変数名         | 例                                         |
  | -------------- | ------------------------------------------ |
  | `MAYA_APP_DIR` | `C:\Users\<ユーザー名>\OneDrive\Data\Maya` |

上記設定により生成される Maya.env のパスは以下のようになる。
```
C:\Users\<ユーザー名>\OneDrive\Data\Maya\2024\Maya.env
```

Maya.env に以下の環境変数を加える
: | 変数名             | 例                                       |
  | ------------------ | ---------------------------------------- |
  | `XGEN_CONFIG_PATH` | `XGEN_CONFIG_PATH = %MAYA_APP_DIR%\2024` |

`XGEN_CONFIG_PATH`に指定したディレクトリに config.txt を作成し`UserRepo`のパスを指定する。

config.txt の中身
: ```
  UserRepo /xgen
  ```
