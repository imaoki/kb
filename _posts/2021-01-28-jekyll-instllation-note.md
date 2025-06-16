---
title: Jekyll インストールノート
date: 2021-01-28 03:07:00 +09:00
updated: 2025-06-17 03:51:00 +09:00
categories: note
tags: jekyll
toc: true
published: true
---
[GitHub Pages](https://docs.github.com/ja/pages)用[Jekyll](https://jekyllrb.com/)の私的導入手順。

### Rubyのインストール
{:#install-ruby}

01. [RubyInstaller for Windows](https://rubyinstaller.org/downloads/)から`Ruby+Devkit`（太字のバージョンが推奨）をダウンロードし、既定値のオプションでインストール
    `Use UTF-8 as default external encoding.`はオンで。

02. 最後の段階で`rick install`を実行

03. `ruby -v`を実行し、バージョンが表示されればインストール完了

#### Rubyのバージョン変更
{:#install-ruby-version-change}

01. 必要なバージョンの`Ruby+Devkit`を通常通りインストール

02. ユーザー環境変数の`Path`から使わないバージョンのパスを削除

### Jekyllのインストール
{:#install-jekyll}

01. ```bash
    gem install jekyll bundler
    ```

02. `jekyll -v`でバージョンが表示されればインストール完了

### Bundlerのインストール
{:#install-bundler}

01. ```bash
    gem install bundler
    ```

02. `bundler -v`でバージョンが表示されればインストール完了

### Gemのインストール
{:#install-gem}

01. `Gemfile`の内容を編集

    ```gems
    source "https://rubygems.org"

    gem "github-pages", "~> 232", group: :jekyll_plugins

    platforms :mingw, :x64_mingw, :mswin, :jruby do
      gem "tzinfo", "~> 1.2"
      gem "tzinfo-data"
    end
    ```

    * `jekyll`やプラグインのgemは今のところ不要なのでコメントアウトしておく。

    * `github-pages`のバージョンは[Dependency versions](https://pages.github.com/versions/)を参照。

01. `Gemfile`のあるディレクトリで`bundle install`を実行

### Jekyllの起動
{:#launch-jekyll}

01. ローカルサイトのルートディレクトリで`bundle exec jekyll serve`を実行

    * `published: false`のポストを表示するには`--unpublished`を加える。

    * タイムゾーンの関係で表示されない場合は`--future`を加える。

03. `http://localhost:4000/`で正常にページが表示されれば完了
    `_config.yml`に`baseurl`を設定している場合は`http://localhost:4000/baseurl/`になる。

#### 設定ファイルの更新が反映されない場合
{:#if-the-update-of-the-configuration-file-is-not-reflected}

01. `bundle exec jekyll build`を実行

#### (Bundler::GemNotFound)や(Gem::LoadError)が出る場合
{:#bundler-gemnotfound-or-gem-loaderror}

01. `bundle update`を実行

### Gemその他
{:#misc-gem}

#### Gemの更新
{:#misc-gem-update}

01. `Gemfile`のあるディレクトリで`bundle update`を実行

#### Gemの全削除
{:#misc-gem-uninstall}

01. `Gemfile`のあるディレクトリで以下を実行

    ```bash
    gem uninstall -aIx --user-install --force
    ```

#### Gemの一覧表示
{:#misc-gem-list}

01. `Gemfile`のあるディレクトリで`gem list`を実行
