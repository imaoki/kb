---
title: ZBrush 設定
date: 2024-09-15 09:40:00 +09:00
updated: 2025-02-20 20:14:00 +09:00
categories: note
tags: zbrush
toc: true
published: true
---
ZBrushの設定。

### Preferences
{:#preferences}

変更後は *Preferences > Config > Store Config (`Ctrl+Shift+I`{:key})* を実行すること。

| 項目                                                           | 値      |
| -------------------------------------------------------------- | ------- |
| Preferences > Interface > Palettes > One Open Subpalette       | `false` |
| Preferences > Interface > UI Groups > AutoClose UI Groups      | `false` |
| Preferences > Interface > Navigation > Enable RightClick Popup | `false` |
| Preferences > Interface > Misc > Fade In Duration              | `0`     |
| Preferences > LightBox > Open At Launch                        | `false` |
| Preferences > Undo History > Max Undo History                  | `1000`  |
| Preferences > QuickSave > Maximum Duration                     | `10`    |
| Preferences > QuickSave > Skip History                         | `true`  |
| Preferences > QuickSave > Max QuickSave Files                  | `20`    |
| Preferences > ScreenSaver > ScreenSaver On                     | `false` |
| Preferences > Thumbnail > Size                                 | `256`   |

### Document
{:#document}

変更後は *Save As Startup Doc* を実行すること。

| 項目                       | 値               |
| -------------------------- | ---------------- |
| Document > WSize           | `true`           |
| Document > Back,           | `R:48 G:48 B:48` |
| Document > Border, Border2 | `R:44 G:44 B:44` |
| Document > Range           | `0`              |

<!--
### Hotkey
{:#hotkey}

| Application Command | Runtime Command | HotKey                    |
| ------------------- | --------------- | ------------------------- |
| Hierarchy           | SelectHierarchy | `Ctrl+Alt+Shift+S`{:.key} |
-->

### トラブルシューティング
{:#troubleshooting}

#### Tablet Services Not Available
{:#troubleshooting-tablet-services-not-available}

起動すると「Tablet Services Not Available」エラーが発生してタブレットが認識されない。

スタートメニュー > Windows管理ツール > サービス
: Wacom Professional Service
  : 停止後に再度開始する
