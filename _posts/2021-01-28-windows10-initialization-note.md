---
title: Windows 10 初期設定ノート
date: 2021-01-28 03:46:00 +09:00
updated: 2024-04-07 04:10:00 +09:00
categories: note
tags: windows
toc: true
published: true
---
Windows 10の私的初期設定ノート。
SSDの最適化やOneDriveの移動等は行わず、なるべく標準を維持する方針で。

### チェックリスト
{:#checklist}

01. ブラウザインストール

02. Windows Update

03. 回復ドライブ作成

04. ビデオカードのドライバ更新

05. ペンタブレットのドライバインストール

06. [基本設定](#basic-settings)

07. [バックアップ設定](#backups-settings)

08. [アプリケーションインストール](#install-applications)

### 基本設定
{:#basic-settings}

#### 自動更新後の再起動抑制
{:#suppress-reboot-after-update}

gpedit.msc > コンピューターの構成 > 管理用テンプレート > Windows コンポーネント > Windows Update
:   自動更新を構成する
    :   有効

        自動更新の構成
        :   2 - ダウンロードと自動インストールを通知

    自動更新を直ちにインストールすることを許可する
    :   無効

    スケジュールされた自動更新のインストールで、ログインしているユーザーがいる場合には自動的に再起動しない
    :   有効

#### Thumbs.db抑制化
{:#suppress-thumbs-db}

システムのプロパティ > 詳細設定 > パフォーマンス > 視覚効果 > アイコンの代わりに縮小版を表示する
:   オフ

フォルダーオプション > 表示 > 詳細設定 > 縮小版にファイルアイコンを表示する
:   オン

gpedit.msc > ユーザーの構成 > 管理用テンプレート > Windows コンポーネント > エクスプローラー
:   縮小表示を無効にしてアイコンのみを表示する
    :   有効

    ネットワークフォルダーで縮小表示を無効にしてアイコンのみを表示する
    :   有効

    非表示の thumbs.db ファイルで縮小表示のキャッシュを無効にする
    :   有効

    縮小表示の画像のキャッシュをオフにする
    :   有効

#### 文字入力設定
{:#text-input-settings}

設定 > デバイス > 入力 > キーボードの詳細設定
:   入力言語のホットキー > キーの詳細設定 > 入力言語を切り替える
    :   なし

    アプリ ウインドウごとに異なる入力方式を設定する
    :   オフ

設定 > 簡単操作 > キーボード > 固定キー機能を起動するショートカットキーを許可する
:   オフ

設定 > Microsoft IME（検索から） > 全般 > 以前のバージョンの Microsoft IME を使う
:   オン

Microsoft IME の詳細設定 > 全般 > 編集操作 > キー設定
:   CapsLockキーによる入力モードの切り替えを無効化するため以下を削除

    * 英数 > 入力/変換済み文字なし

    * 英数 > 入力文字のみ

Microsoft IME の詳細設定 > 全般 > 編集操作 > 直接入力モードを使用しない
:   オフ

    アプリ切替で入力モードが勝手に切り替わるのを防ぐ

#### スリープモード設定
{:#sleep-mode-settings}

デバイスマネージャー > ネットワーク アダプター > イーサネットコントローラのプロパティ > 電源の管理 > このデバイスで、コンピュータのスタンバイ状態を解除できるようにする
:   オフ

設定 > システム > 電源とスリープ > 電源の追加設定 > プラン設定の変更 > 詳細な電源設定の変更 > スリープ > スリープ解除タイマーの許可
:   無効

#### 集中モードを無効化
{:disable-focus-mode}

設定 > システム > 集中モード > 自動規則
: 全てオフ

gpedit.msc > ユーザーの構成 > 管理用テンプレート > タスクバーと[スタート]メニュー > 通知 > 非通知モードをオフにする
: 有効

#### ウィンドウ境界の幅
{:#window-border-width}

キー
:   `HKEY_CURRENT_USER\Control Panel\Desktop\WindowMetrics`

    文字列値
    :   `PaddedBorderWidth`

        規定値
        :   `-60`

        設定値
        :   `0`

#### フォルダの種類を固定
{:#fix-folder-type}

全てのフォルダの種類を「全般」にする。

01. 以下のキーを削除

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\BagMRU`

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags`

02. 以下のキーと文字列値を追加

    キー
    :   `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags\AllFolders\Shell`

        文字列値
        :   名前
            :   `FolderType`

            値
            :   `NotSpecified`

#### ウィンドウの下に影を表示しない
{:disable-show-shadows-under-windows}

システムのプロパティ > 詳細設定 > パフォーマンス > 視覚効果 > ウィンドウの下に影を表示する
:   オフ

#### AeroスナップとAeroシェイクを無効にする
{:#disable-aero-snap-and-aero-shake}

コントロールパネル > コンピューターの簡単操作 > コンピューターの簡単操作センター > マウスを使いやすくします > ウィンドウ管理を簡単にします > ウィンドウが画面の端に移動されたときに自動的に整列されないようにします
:   オン

#### ペンタブレット設定
{:#pen-tablet-settings}

設定 > システム > タブレット
:   サインイン時の動作
    :   タブレットモードを使用しない

    このデバイスをタブレットとして使用するとき
    :   タブレットモードに切り替えない

設定 > デバイス > ペンとWindows Ink > ペン
:   利き手を選択する
    :   右利き

    視覚効果を表示する
    :   オフ

    カーソルを表示する
    :   オン

    一部のデスクトップアプリでペンをマウスとして使用できるようにする
    :   オフ

    ペンの使用中はタッチ入力を無視する
    :   オフ

設定 > デバイス > ペンとWindows Ink > 手書き
:   ペンでテキストフィールドをタップしたとき、手書き文字を使用してテキストを入力する
    :   タブレットモード時のみ

    手書きパネルで指先を使って書く
    :   オフ

設定 > デバイス > ペンとWindows Ink > ペンのショートカット
:   シングルクリック
    :   なし

    ダブルクリック
    :   なし

    長押し
    :   なし

    アプリによるショートカットボタンの動作の上書きを許可します
    :   オン

    使用可能な場合は、ペンを保管場所から取り出した後に Ink ワークスペースを表示する
    :   オフ

コントロールパネル > ハードウェアとサウンド > ペンとタッチ
:   ペン操作 > 長押し
    :   長押しを右クリックとして認識する
        :   オフ

ワコムタブレットのプロパティ > 入力デバイス > プロペン > マッピング
:   デジタルインク機能を使う
    :   オフ
        （ブラウザで文字選択が出来なくなる不具合を解消。）

### バックアップ設定
{:#backups-settings}

[Acronis True Image](https://www.acronis.com/ja-jp/personal/computer-backup/)

スケジュール
:   日単位-4時間毎

バックアップスキーム
:   カスタムスキーム

    バックアップの種類
    :   差分

    次の間隔で完全バージョンを作成する
    :   6差分バージョン

    次の期間が経過したバージョンチェーンを削除する
    :   7日

### アプリケーションインストール
{:#install-applications}

#### ユーティリティアプリ
{:#install-utility-apps}

* [7-Zip](https://sevenzip.osdn.jp/)

* [FileZilla](https://filezilla-project.org/)

* [ImageGlass](https://imageglass.org/)

* [MassiGra](http://www.massigra.net/)

* [Microsoft PowerToys](https://learn.microsoft.com/ja-jp/windows/powertoys/)

* [StrokesPlus.net](https://www.strokesplus.net/)

* [Sumatra PDF](https://www.sumatrapdfreader.org/free-pdf-reader.html)

* [ウィンドウ位置記憶プログラム](https://www.vector.co.jp/soft/win95/util/se401241.html)

* [マグネットウィンドウ(MagnetWindow)](https://www.vector.co.jp/soft/winnt/util/se175660.html)

#### 開発環境
{:#install-development-environment}

01. [Visual Studio Code インストールノート](2021-01-28-visual-studio-code-instllation-note)

02. [Git for Windows インストールノート](2021-01-28-git-for-windows-instllation-note)

03. [Jekyll インストールノート](2021-01-28-jekyll-instllation-note)

#### グラフィックアプリ
{:#install-graphic-apps}

* [3ds Max 設定](2020-06-22-3ds-max-settings)

* [Photoshop 設定](2021-01-29-photoshop-settings)

### トラブルシューティング
{:#troubleshooting}

#### システムイメージの作成に失敗
{:#troubleshooting-failed-to-create-system-image}

参考
:   [https://sas.at.webry.info/201712/article_1.html](https://sas.at.webry.info/201712/article_1.html)

####  ネットワーク上にPCが表示されない
{:#troubleshooting-pc-does-not-show-up-on-network}

参考
:   [https://www.pasoble.jp/windows/10/kyouyu-pc-hyoujsarenai.html](https://www.pasoble.jp/windows/10/kyouyu-pc-hyoujsarenai.html)

#### クイックアクセスのピン留めが解除できない
{:#troubleshooting-unable-to-unpin-quick-access}

参考
:   [https://social.technet.microsoft.com/Forums/ja-JP/3e87e229-41f4-4427-be5e-242c0c0c7cc4](https://social.technet.microsoft.com/Forums/ja-JP/3e87e229-41f4-4427-be5e-242c0c0c7cc4)


#### VIDEO_TDR_FAILURE
{:#troubleshooting-video_tdr_failure}

参考
:   * [ブルースクリーン: VIDEO\_TDR\_FAILUREの原因と解決方法 – Windows10](https://itojisan.xyz/trouble/21921/)

    * [ついに解決「ディスプレイ ドライバ nvlddmkm が応答を停止しましたが、正常に回復しました。」問題 \| ひとりアウトプット広場](https://www.losspass.com/article/nvlddmkm.html)

設定 > システム > 電源とスリープ > 電源の追加設定
:   電源ボタンの動作を選択する > シャットダウン設定 > 高速スタートアップを有効にする
    :   オフ

    電源プランの選択
    :   高パフォーマンス

        プラン設定の変更 > 詳細な電源設定の変更
        :   ハードディスク > 次の時間が経過後ハードディスクの電源を切る
            :   なし

            USB 設定 > USB のセレクティブ サスペンドの設定
            :   無効

            PCI Express > リンク状態の電源管理
            :   オフ

#### Kernel-Power 41
{:#troubleshooting-kernel-power-41}

要検証

参考
:   * [KP41病かな？と思った場合のチェックポイント \- ぼくんちのTV 別館](https://freesoft.tvbok.com/windows7/another_kp41/kp41_checkpoint_2015.html)

    * [重大なエラー「Kernel\-Power 41」の原因と対処法 – Windows10](https://itojisan.xyz/trouble/20480/)
