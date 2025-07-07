---
title: Markdown チートシート
date: 2016-01-05 21:32:00 +09:00
updated: 2025-07-07 00:42:00 +09:00
categories: document
tags: markdown
toc: true
published: true
---
[GFM](https://github.github.com/gfm/)、[kramdown](https://kramdown.gettalong.org/)、[Markdown Extended](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended)に対応した記述のサンプル。

### ブロック要素
{:#block-elements}

#### 段落と改行
{:#paragraphs-and-line-breaks}

記述
: ```markdown
  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  0123456789

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6
  ```

結果
: <span/>{:.invisible}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  0123456789

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6

#### 見出し
{:#headers}

記述
: ```markdown
  # 見出し1

  ## 見出し2

  ### 見出し3

  #### 見出し4

  ##### 見出し5

  ###### 見出し6
  ```

結果
: # 見出し1
  {:#header-level1}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ## 見出し2
  {:#header-level2}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ### 見出し3
  {:#header-level3}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  #### 見出し4
  {:#header-level4}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ##### 見出し5
  {:#header-level5}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ###### 見出し6
  {:#header-level6}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ## Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

#### 引用
{:#blockquotes}

記述
: ````markdown
  > Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > > cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。
  > >
  > > ```plaintext
  > > 0123456789
  > > ```
  >
  > * ABCDEFGHIJKLMNOPQRSTUVWXYZ
  >
  > * abcdefghijklmnopqrstuvwxyz
  >
  > ```plaintext
  > 0123456789
  > ```
  >
  > 用語
  > : 定義
  >  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ````

結果
: > Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > > cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。
  > >
  > > ```plaintext
  > > 0123456789
  > > ```
  >
  > * ABCDEFGHIJKLMNOPQRSTUVWXYZ
  >
  > * abcdefghijklmnopqrstuvwxyz
  >
  > ```plaintext
  > 0123456789
  > ```
  >
  > 用語
  > : 定義
  >  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### リスト
{:#lists}

記述
: ````markdown
  * A

  * B - start

      * Ba - start

        段落

        Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
        cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        abcdefghijklmnopqrstuvwxyz
        0123456789

        Ba - end

        * Baあ

      * Bb - start

          1.  1 - start

              1.  11 - start

                  * 11A - start

                    引用

                    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    > abcdefghijklmnopqrstuvwxyz

                    11A - end

                  * 11B

                  11 - end

              2.  12 - start

                  整形済みテキスト

                  ```plaintext
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  abcdefghijklmnopqrstuvwxyz
                  ```

                  12 - end

              1 - end

          2.  2 - start

              テーブル

              | TH  | TH  |
              | --- | --- |
              | TD  | TD  |
              | TD  | TD  |

              2 - end

          3.  3

        Bb - end

    B - end

  * C

    01. C.01

    02. C.02

    03. C.03

    04. C.04

    05. C.05

    06. C.06

    07. C.07

    08. C.08

    09. C.09

    10. C.10

  * D

  * E
  ````

結果
: * A

  * B - start

      * Ba - start

        段落

        Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
        cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        abcdefghijklmnopqrstuvwxyz
        0123456789

        Ba - end

        * Baあ

      * Bb - start

          1.  1 - start

              1.  11 - start

                  * 11A - start

                    引用

                    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    > abcdefghijklmnopqrstuvwxyz

                    11A - end

                  * 11B

                  11 - end

              2.  12 - start

                  整形済みテキスト

                  ```plaintext
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  abcdefghijklmnopqrstuvwxyz
                  ```

                  12 - end

              1 - end

          2.  2 - start

              テーブル

              | TH  | TH  |
              | --- | --- |
              | TD  | TD  |
              | TD  | TD  |

              2 - end

          3.  3

        Bb - end

    B - end

  * C

    01. C.01

    02. C.02

    03. C.03

    04. C.04

    05. C.05

    06. C.06

    07. C.07

    08. C.08

    09. C.09

    10. C.10

  * D

  * E

---

* インデント確認

01. インデント確認

    * インデント確認

    01. インデント確認

    02. インデント確認

    03. インデント確認

02. インデント確認

03. インデント確認

04. インデント確認

05. インデント確認

06. インデント確認

07. インデント確認

08. インデント確認

09. インデント確認

10. インデント確認

#### 定義リスト
{:#definition-lists}

記述
: ````markdown
  用語1
  : <span/>{:.invisible}

    定義1

    段落

    Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
    cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789

  : 定義2

    引用

    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
    > abcdefghijklmnopqrstuvwxyz
    > 0123456789

  用語2
  : <span/>{:.invisible}

    定義1

    整形済みテキスト

    ```plaintext
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789
    ```

  : 定義2

    リスト

    * A

    * B
  ````

結果
: 用語1
  : <span/>{:.invisible}

    定義1

    段落

    Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
    cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789

  : 定義2

    引用

    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
    > abcdefghijklmnopqrstuvwxyz
    > 0123456789

  用語2
  : <span/>{:.invisible}

    定義1

    整形済みテキスト

    ```plaintext
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789
    ```

  : 定義2

    リスト

    * A

    * B

最初の定義を段落にできないのでダミー要素を挟むことで対応。
{:.note}

#### 整形済みテキスト
{:#indented-code-blocks}

記述
: ```markdown
      Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
      cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

      ABCDEFGHIJKLMNOPQRSTUVWXYZ
      abcdefghijklmnopqrstuvwxyz
      0123456789

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6
  ```

結果
:     Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
      cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

      ABCDEFGHIJKLMNOPQRSTUVWXYZ
      abcdefghijklmnopqrstuvwxyz
      0123456789

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6

#### Fenced Code Blocks
{:#fenced-code-blocks}

記述
: ````markdown
  ```python
  import os
  import json
  import logging
  from datetime import datetime
  from typing import List, Dict


  # ログ設定
  logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


  def scan_directory(path: str, extensions: List[str]) -> List[Dict[str, str]]:
      """指定した拡張子のファイルを再帰的に検索し、結果をリストで返す"""
      results = []
      for root, dirs, files in os.walk(path):
          for file in files:
              if any(file.endswith(ext) for ext in extensions):
                  full_path = os.path.join(root, file)
                  results.append({
                      "name": file,
                      "path": full_path,
                      "modified": datetime.fromtimestamp(os.path.getmtime(full_path)).isoformat()
                  })
      return results


  def save_json(data: List[Dict[str, str]], output_file: str) -> None:
      """結果をJSON形式で保存"""
      with open(output_file, 'w', encoding='utf-8') as f:
          json.dump(data, f, indent=2, ensure_ascii=False)
      logging.info(f"JSONファイル保存完了: {output_file}")


  def main():
      target_dir = "./logs"
      output = "scan_results.json"
      try:
          logging.info("ディレクトリスキャン開始")
          result = scan_directory(target_dir, [".log", ".txt"])
          save_json(result, output)
      except Exception as e:
          logging.error(f"エラー発生: {e}")


  if __name__ == "__main__":
      main()
  ```
  ````

結果
: ```python
  import os
  import json
  import logging
  from datetime import datetime
  from typing import List, Dict


  # ログ設定
  logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


  def scan_directory(path: str, extensions: List[str]) -> List[Dict[str, str]]:
      """指定した拡張子のファイルを再帰的に検索し、結果をリストで返す"""
      results = []
      for root, dirs, files in os.walk(path):
          for file in files:
              if any(file.endswith(ext) for ext in extensions):
                  full_path = os.path.join(root, file)
                  results.append({
                      "name": file,
                      "path": full_path,
                      "modified": datetime.fromtimestamp(os.path.getmtime(full_path)).isoformat()
                  })
      return results


  def save_json(data: List[Dict[str, str]], output_file: str) -> None:
      """結果をJSON形式で保存"""
      with open(output_file, 'w', encoding='utf-8') as f:
          json.dump(data, f, indent=2, ensure_ascii=False)
      logging.info(f"JSONファイル保存完了: {output_file}")


  def main():
      target_dir = "./logs"
      output = "scan_results.json"
      try:
          logging.info("ディレクトリスキャン開始")
          result = scan_directory(target_dir, [".log", ".txt"])
          save_json(result, output)
      except Exception as e:
          logging.error(f"エラー発生: {e}")


  if __name__ == "__main__":
      main()
  ```

##### ネストしたコードブロック
{:#nested-fenced-code-blocks}

記述
: `````markdown
  ````markdown
  ```plaintext
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  ```
  ````
  `````

結果
: ````markdown
  ```plaintext
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  ```
  ````

外側のバッククォートを増やしていく。
{:.note}

#### テーブル
{:#tables}

記述
: ```markdown
  | -   | 左寄せ |               中央寄せ               | 右寄せ |
  | --- | :----- | :----------------------------------: | -----: |
  | 行1 | TD     |                  TD                  |     TD |
  | 行2 | TD     | セル内の改行は<br>`<br>`タグを使う。 |     TD |
  ```

結果
: | -   | 左寄せ |               中央寄せ               | 右寄せ |
  | --- | :----- | :----------------------------------: | -----: |
  | 行1 | TD     |                  TD                  |     TD |
  | 行2 | TD     | セル内の改行は<br>`<br>`タグを使う。 |     TD |

#### 水平線
{:#horizontal-rules}

記述
: ```markdown
  ---
  ```

結果
: ---

### インライン要素
{:#inline-elements}

#### リンク
{:#links}

記述
: ```markdown
  [通常リンク]({{ site.url }}{{ site.baseurl }}/ "ツールチップA")
  [参照リンク][ref]
  [参照リンク（ID省略）][]
  [Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.][ref]

  [ref]:{{ site.url }}{{ site.baseurl }}/ "ツールチップB"
  [参照リンク（ID省略）]:{{ site.url }}{{ site.baseurl }}/ "ツールチップC"

  外部サイト[https://github.com/](https://github.com/)
  自動リンク<{{ site.url }}{{ site.baseurl }}/>
  相対リンク[highlight.js サンプル](2019-04-14-highlight-js-sample)
  ```

結果
: <span/>{:.invisible}

  [通常リンク]({{ site.url }}{{ site.baseurl }}/ "ツールチップA")
  [参照リンク][ref]
  [参照リンク（ID省略）][]
  [Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.][ref]

  [ref]:{{ site.url }}{{ site.baseurl }}/ "ツールチップB"
  [参照リンク（ID省略）]:{{ site.url }}{{ site.baseurl }}/ "ツールチップC"

  外部サイト[https://github.com/](https://github.com/)
  自動リンク<{{ site.url }}{{ site.baseurl }}/>
  相対リンク[highlight.js サンプル](2019-04-14-highlight-js-sample)

参照先の記述は前に一行空ける必要がある。
{:.note}

#### 脚注
{:#footnotes}

記述
: ```markdown
  脚注1[^1]
  脚注2[^a]

  [^1]:脚注1
  [^a]:脚注2
  ```

結果
: 脚注1[^1]
  脚注2[^a]

  [^1]:脚注1
  [^a]:脚注2

#### 文字修飾
{:#emphasis}

記述
: ```markdown
  *強調*
  _強調_
  **より強い強調**
  __より強い強調__
  `コード`
  ``中間`の`エスケープ``
  `` `先頭or末尾のエスケープ` ``
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ~~打ち消し線~~
  ```

結果
: *強調*
  _強調_
  **より強い強調**
  __より強い強調__
  `コード`
  ``中間`の`エスケープ``
  `` `先頭or末尾のエスケープ` ``
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ~~打ち消し線~~

#### 画像
{:#images}

記述
: ```markdown
  画像
  : <span/>{:.invisible}

    相対アドレス![代替文字]({{ '/assets/images/sample/32x32.png' | relative_url }} "ツールチップ")

  リンク
  : <span/>{:.invisible}

    相対アドレス[![代替文字]({{ '/assets/images/sample/64x64.png' | relative_url }} "ツールチップ")]({{ '/assets/images/sample/64x64.png' | relative_url }})
    絶対アドレス[![代替文字]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }} "ツールチップ")]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }})
    外部サイト[![代替文字]({{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップ")](https://github.com/)

  参照画像
  : <span/>{:.invisible}

    ID指定![参照画像][img]
    ID省略![参照画像（ID省略）][]

    [img]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップA"
    [参照画像（ID省略）]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップB"

  高解像度
  : <span/>{:.invisible}

    [![512x512]({{ '/assets/images/sample/512x512t.png' | relative_url }})]({{ '/assets/images/sample/512x512.png' | relative_url }})
    [![1024x1024]({{ '/assets/images/sample/1024x1024t.png' | relative_url }})]({{ '/assets/images/sample/1024x1024.png' | relative_url }})
    [![2048x2048]({{ '/assets/images/sample/2048x2048t.png' | relative_url }})]({{ '/assets/images/sample/2048x2048.png' | relative_url }})
    ![2048x2048]({{ '/assets/images/sample/2048x2048.png' | relative_url }})
  ```

結果
: 画像
  : <span/>{:.invisible}

    相対アドレス![代替文字]({{ '/assets/images/sample/32x32.png' | relative_url }} "ツールチップ")

  リンク
  : <span/>{:.invisible}

    相対アドレス[![代替文字]({{ '/assets/images/sample/64x64.png' | relative_url }} "ツールチップ")]({{ '/assets/images/sample/64x64.png' | relative_url }})
    絶対アドレス[![代替文字]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }} "ツールチップ")]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }})
    外部サイト[![代替文字]({{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップ")](https://github.com/)

  参照画像
  : <span/>{:.invisible}

    ID指定![参照画像][img]
    ID省略![参照画像（ID省略）][]

    [img]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップA"
    [参照画像（ID省略）]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップB"

  高解像度
  : <span/>{:.invisible}

    [![512x512]({{ '/assets/images/sample/512x512t.png' | relative_url }})]({{ '/assets/images/sample/512x512.png' | relative_url }})
    [![1024x1024]({{ '/assets/images/sample/1024x1024t.png' | relative_url }})]({{ '/assets/images/sample/1024x1024.png' | relative_url }})
    [![2048x2048]({{ '/assets/images/sample/2048x2048t.png' | relative_url }})]({{ '/assets/images/sample/2048x2048.png' | relative_url }})
    ![2048x2048]({{ '/assets/images/sample/2048x2048.png' | relative_url }})

<!--
### インラインフレーム
{:#iframes}

<iframe class="iframe-class" src="https://github.com/imaoki/imaoki.github.io" width="520" height="293"></iframe>
-->

### kramdown
{:#kramdown}

Jekyllで有効。

#### ブロック要素の属性
{:#kramdown-block-attributes}

Markdown Extendedとの違いに注意。
{:.warning}

記述
: ```markdown
  ブロック要素
  {:#block-element-id style="color: magenta;"}
  ```

結果
: ```html
  <p id="block-element-id" style="color: magenta;">ブロック要素</p>
  ```

  ブロック要素
  {:#block-element-id style="color: magenta;"}

##### ノート
{:#kramdown-block-attributes-note}

記述
: ```markdown
  ノート
  {:.note}
  ```

結果
: <span/>{:.invisible}

  ノート
  {:.note}

##### 警告
{:#kramdown-block-attributes-warning}

記述
: ```markdown
  警告
  {:.warning}
  ```

結果
: <span/>{:.invisible}

  警告
  {:.warning}

##### 入力
{:#kramdown-block-attributes-input}

記述
: ```markdown
  入力
  {:.input}

  red
  {:.input .red}

  orange
  {:.input .orange}

  yellow
  {:.input .yellow}

  green
  {:.input .green}

  cyan
  {:.input .cyan}

  blue
  {:.input .blue}

  magenta
  {:.input .magenta}
  ```

結果
: <span/>{:.invisible}

  入力
  {:.input}

  red
  {:.input .red}

  orange
  {:.input .orange}

  yellow
  {:.input .yellow}

  green
  {:.input .green}

  cyan
  {:.input .cyan}

  blue
  {:.input .blue}

  magenta
  {:.input .magenta}

##### 出力
{:#kramdown-block-attributes-output}

記述
: ```markdown
  出力
  {:.output}

  red
  {:.output .red}

  orange
  {:.output .orange}

  yellow
  {:.output .yellow}

  green
  {:.output .green}

  cyan
  {:.output .cyan}

  blue
  {:.output .blue}

  magenta
  {:.output .magenta}
  ```

結果
: <span/>{:.invisible}

  出力
  {:.output}

  red
  {:.output .red}

  orange
  {:.output .orange}

  yellow
  {:.output .yellow}

  green
  {:.output .green}

  cyan
  {:.output .cyan}

  blue
  {:.output .blue}

  magenta
  {:.output .magenta}

#### インライン要素の属性
{:#kramdown-inline-attributes}

Markdown Extendedとの違いに注意。
{:.warning}

記述
: ```markdown
  *インライン要素*{:#inline-element-id style="color: cyan;"}
  ```

結果
: ```html
  <em id="inline-element-id" style="color: cyan;">インライン要素</em>
  ```

  *インライン要素*{:#inline-element-id style="color: cyan;"}

##### シンタックスハイライト
{:#kramdown-inline-attributes-syntax-highlihgt}

記述
: ```markdown
  `<style>body {width: 500px;}</style>`{:.code .language-html}
  ```

結果
: <span/>{:.invisible}

  `<style>body {width: 500px;}</style>`{:.code .language-html}

##### キーボタン
{:#kramdown-inline-attributes-key-button}

記述
: ```markdown
  `Ctrl+A`{:.key}で全て選択し、`Ctrl+C`{:.key}でコピーする。
  ```

表示
: <span/>{:.invisible}

  `Ctrl+A`{:.key}で全て選択し、`Ctrl+C`{:.key}でコピーする。

### Markdown Extended
{:#markdown-extended}

Markdown Converterによる変換で有効。

#### Admonition
{:#markdown-extended-admonition}

記述
: ```markdown
  !!! ノート

      Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

      !!! warning 警告

          Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。
  ```

表示
: <span/>{:.invisible}

  !!! ノート

      Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

      !!! warning 警告

          Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

#### markdown-it-attrs
{:#markdown-extended-markdown-it-attrs}

kramdownとの違いに注意。
{:.warning}

記述
: ```markdown
  `<style>body {width: 500px;}</style>`{.code .language-html}
  ```

表示
: <span/>{:.invisible}

  `<style>body {width: 500px;}</style>`{.code .language-html}

##### ノート
{:#markdown-extended-markdown-it-attrs-note}

記述
: ```markdown
  **ノート**{.note}
  ```

結果
: <span/>{:.invisible}

  **ノート**{.note}

##### 警告
{:#markdown-extended-markdown-it-attrs-warning}

記述
: ```markdown
  **警告**{.warning}
  ```

結果
: <span/>{:.invisible}

  **警告**{.warning}

##### 入力
{:#markdown-extended-markdown-it-attrs-input}

記述
: ```markdown
  **入力**{.input}

  **red**{.input .red}

  **orange**{.input .orange}

  **yellow**{.input .yellow}

  **green**{.input .green}

  **cyan**{.input .cyan}

  **blue**{.input .blue}

  **magenta**{.input .magenta}
  ```

結果
: <span/>{:.invisible}

  **入力**{.input}

  **red**{.input .red}

  **orange**{.input .orange}

  **yellow**{.input .yellow}

  **green**{.input .green}

  **cyan**{.input .cyan}

  **blue**{.input .blue}

  **magenta**{.input .magenta}

##### 出力
{:#markdown-extended-markdown-it-attrs-output}

記述
: ```markdown
  **出力**{.output}

  **red**{.output .red}

  **orange**{.output .orange}

  **yellow**{.output .yellow}

  **green**{.output .green}

  **cyan**{.output .cyan}

  **blue**{.output .blue}

  **magenta**{.output .magenta}
  ```

結果
: <span/>{:.invisible}

  **出力**{.output}

  **red**{.output .red}

  **orange**{.output .orange}

  **yellow**{.output .yellow}

  **green**{.output .green}

  **cyan**{.output .cyan}

  **blue**{.output .blue}

  **magenta**{.output .magenta}

#### markdown-it-kbd
{:#markdown-extended-markdown-it-kbd}

記述
: ```markdown
  [[Ctrl+A]]で全て選択し、[[Ctrl+C]]でコピーする。
  ```

表示
: <span/>{:.invisible}

  [[Ctrl+A]]で全て選択し、[[Ctrl+C]]でコピーする。
