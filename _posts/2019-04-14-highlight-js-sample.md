---
title: highlight.js サンプル
date: 2019-04-14 16:57:00 +09:00
updated: 2025-06-15 21:43:00 +09:00
categories: sample
tags: javascript markdown
toc: true
published: true
---
[highlight.js](https://highlightjs.org/)の確認用。

### Bash
{:#bash}

```bash
#!/bin/bash

# ログファイルをバックアップして圧縮するスクリプト

BACKUP_DIR="/var/backups/logs"
SOURCE_DIR="/var/log"
DATE=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="logs_backup_$DATE.tar.gz"
LOG_FILE="./backup_$DATE.log"

mkdir -p "$BACKUP_DIR"

echo "[$(date)] バックアップ開始" | tee "$LOG_FILE"

find "$SOURCE_DIR" -type f -name "*.log" -size +0c | while read -r file; do
  echo "追加: $file" >> "$LOG_FILE"
done

tar -czf "$BACKUP_DIR/$ARCHIVE_NAME" -C "$SOURCE_DIR" ./*.log 2>>"$LOG_FILE"

if [[ $? -eq 0 ]]; then
  echo "[$(date)] バックアップ完了: $ARCHIVE_NAME" | tee -a "$LOG_FILE"
else
  echo "[$(date)] エラー: バックアップ失敗" | tee -a "$LOG_FILE"
fi

exit 0
```

### CSS
{:#css}

```css
/*---------------------------
  インポートとフォント設定
---------------------------*/
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2'),
       url('/fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/*---------------------------
  ルート変数と基本リセット
---------------------------*/
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
  --font-stack: 'Roboto', 'MyCustomFont', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*---------------------------
  基本レイアウト
---------------------------*/
body {
  font-family: var(--font-stack);
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

header, footer {
  background-color: var(--main-color);
  color: white;
  padding: 1rem;
  text-align: center;
}

/*---------------------------
  ナビゲーション
---------------------------*/
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: var(--secondary-color);
}

/*---------------------------
  コンテナとグリッド
---------------------------*/
.container {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/*---------------------------
  メディアクエリ
---------------------------*/
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }

  .container {
    grid-template-columns: 1fr;
  }
}

/*---------------------------
  擬似要素・擬似クラス
---------------------------*/
button::before {
  content: "▶ ";
  color: var(--main-color);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/*---------------------------
  アニメーション
---------------------------*/
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  animation: fadeIn 0.5s ease-in-out;
}
```

### Diff
{:#diff}

Normal
: ```diff
  2c2
  < Line 1: Hello world
  ---
  > Line 1: Hello world!
  3c3
  < Line 3: It has three lines
  ---
  > Line 3: It has four lines now
  ```

Context
: ```diff
  *** old.txt	2025-06-15 20:00:00.000000000 +0900
  --- new.txt	2025-06-15 20:01:00.000000000 +0900
  ***************
  *** 1,4 ****
  ! Line 1: Hello world
    Line 2: This is a sample text
  ! Line 3: It has three lines
    Line 4: End of file
  --- 1,4 ----
  ! Line 1: Hello world!
    Line 2: This is a sample text
  ! Line 3: It has four lines now
    Line 4: End of file
  ```

Unified
: ```diff
  --- old.txt	2025-06-15 20:00:00.000000000 +0900
  +++ new.txt	2025-06-15 20:01:00.000000000 +0900
  @@ -1,4 +1,4 @@
  -Line 1: Hello world
  +Line 1: Hello world!
  Line 2: This is a sample text
  -Line 3: It has three lines
  +Line 3: It has four lines now
  Line 4: End of file
  ```

### EBNF
{:#ebnf}

```ebnf
             (* a simple program in EBNF − Wikipedia *)
             program = 'PROGRAM' , white space , identifier , white space ,
                       'BEGIN' , white space ,
                       { assignment , ";" , white space } ,
                       'END.' ;

          identifier = alphabetic character , [ { alphabetic character | digit } ] ;

              number = [ "-" ] , digit , [ { digit } ] ;

              string = '"' , { all characters - '"' } , '"' ;

          assignment = identifier , ":=" , ( number | identifier | string ) ;

alphabetic character = "A" | "B" | "C" | "D" | "E" | "F" | "G"
                     | "H" | "I" | "J" | "K" | "L" | "M" | "N"
                     | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
                     | "V" | "W" | "X" | "Y" | "Z" ;

               digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;

         white space = ? white space characters ? ;

      all characters = ? all visible characters ? ;
```

### Javascript
{:#javascript}

```javascript
// ユーザーデータ処理用ユーティリティ

import { EMAIL_REGEX } from './config.mjs';

export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  get displayName() {
    return this.name.trim().replace(/\b\w/g, c => c.toUpperCase());
  }

  isValidEmail() {
    return EMAIL_REGEX.test(this.email);
  }
}

export function filterValidUsers(users) {
  return users.filter(user => user.isValidEmail());
}
```

### JSON
{:#json}

```json
{
  "app": {
    "name": "BackupUtility",
    "version": "2.1.0",
    "debug": true,
    "paths": {
      "source": "/var/log",
      "destination": "/var/backups/logs",
      "log": "/home/user/backup_logs"
    }
  },
  "schedules": [
    {
      "day": "Monday",
      "time": "03:00",
      "enabled": true
    },
    {
      "day": "Friday",
      "time": "22:00",
      "enabled": false
    }
  ],
  "notifications": {
    "email": {
      "enabled": true,
      "recipients": ["admin@example.com"],
      "smtp": {
        "server": "smtp.example.com",
        "port": 587,
        "use_tls": true
      }
    }
  }
}
```

### Markdown
{:#markdown}

```markdown
# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing `i can write code`, and `more` wipee!
```

### MAXScript
{:#maxscript}

```maxscript
global var -- Line Comment

/*
Block Comment
*/
struct TestClass (
  public Literals = #(
    1, .1e-2, 1.2, -0., 0x0E, "String", @"Verbatim", #Name, true,
    2m30s5f2t, 18.25f, 2:10.0, $'Node Name', #{1..3, 5}
  ),

  private rlt = Rollout rlt "Title" (
    CheckBox ckbx "Caption" checked:false triState:0
    on ckbx Changed state do (
      -- ...
    )
  ),

  public fn TestFunction pA &pB pC:false &pD:1.2 pE:#(1, 2) pF: = (
    -- ...
  ),

  private mapped fn compare x y = (
    -- ...
  ),

  on Create do (
    -- ...
  )
)
```

```maxscript
global globalVariableName

/*
---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6
*/
struct ClassName (
  public PublicProp1 = #Var1,
  private privateProp1 = "var2", -- Line Comment

  fn FunctionName = /* ... */,

  fn FunctionName = (
    -- ...
  ),

  public fn FunctionName p1 &p2 p3:#("x = 1", 1L, DataPair x:1 y:2) &p4: = (
    -- ...
  ),

  private fn functionName
      param1
      &param2
      param3:#("x = 1", 1, .1e-2, 1.2, -0., 0x0E, #{1..3, 5})
      &param4:
      param5:(fn f x y = x * y) = (
    -- ...
  ),

  /*
  Reserved Global Variables
  */
  fn FunctionName = (
    -- Language Reserved Keywords
    #(
      about, and, animate, as, at, by, case, catch, collect, continue, coordsys, do, else, exit, for, from, global, if, in, local, macroscript, mapped, max,
      not, of, off, on, or, parameters, persistent, plugin, private, public, rcmenu, return, rollout, set, then, throw, to, tool, try, undo, utility, when,
      where, while, with
    )

    -- Predefined Globals
    #(
      black, blue, brown, dontcollect, e, false, gray, green, ok, orange, pi, red, true, undefined, unsupplied, white, x_axis, y_axis, yellow, z_axis
    )

    -- 3ds Max System Globals & MAXScript System Globals
    #(
      activegrid, activemeditslot, ambientcolor, ambientcolorcontroller, animationrange, animbuttonenabled, animbuttonstate, backgroundcolor,
      backgroundcolorcontroller, backgroundimagefilename, currentmateriallibrary, currenttime, displaygamma, displaysafeframes, editorfont, editorfontsize,
      editorshowpath, editortabwidth, enableaccelerators, environmentmap, escapeenable, fileingamma, fileoutgamma, flyofftime, framerate, globaltracks,
      hardwarelockid, heapfree, heapsize, hotspotangleseparation, inputtextcolor, lightlevel, lightlevelcontroller, lighttintcolor, lighttintcolorcontroller,
      listener, localprerendscript, localtime, lyricdirectory, macrorecorder, manipulatemode, maxfilename, maxfilepath, messagetextcolor, numatmospherics,
      numeffects, numsubobjectlevels, outputtextcolor, playactiveonly, playbackloop, postrendscript, prerendscript, productappid, realtimeplayback,
      rendatmosphere, rendcamnode, rendcolorcheck, renddither256, renddithertrue, rendend, renderdisplacements, rendereffects, renderer, renderheight,
      renderpixelaspect, renderpresetmrulist, renderwidth, rendfieldorder, rendfieldrender, rendfilenumberbase, rendforce2side, rendhidden,
      rendimageaspectratio, rendimgseqtype, rendlockimageaspectratio, rendlockpixelaspectratio, rendmultithread, rendnthframe, rendnthserial, rendntsc_pal,
      rendoutputfilename, rendpickupframes, rendpixelaspectratio, rendsavefile, rendshowvfb, rendsimplifyarealights, rendstart, rendsuperblack,
      rendsuperblackthresh, rendtimetype, renduseactiveview, rendusedevice, renduseimgseq, rendusenet, rendvidcorrectmethod, rendviewid, rendviewindex,
      rootnode, rootscene, scenematerials, scriptspath, showendresult, skiprenderedframes, slidertime, stacklimit, subobjectlevel, superclasses, ticksperframe,
      timedisplaymode, trackviewnodes, useenvironmentmap, usepostrendscript, useprerendscript, videoposttracks
    )
  ),

  /*
  Variables
  */
  fn FunctionName = (
    local foo, bar
    local baz = true
    global hoge = not baz

    local pi = 'hello'
    format "local pi:%\n" pi
    format "global pi:%\n" ::pi
  ),

  /*
  Variable Names
  */
  fn FunctionName = (
    foo
    bar123
    longVariableName
    __longVariableName__
    foo.bar.baz
    'foo \' bar'
  ),

  /*
  Literal
  */
  fn FunctionName
      param1
      &param2
      param3:#("x = 1", 1, .1e-2, 1.2, -0., 0x0E, #{1..3, 5})
      &param4: = (

    -- Number
    123 + 123.45 + -0.00345 + 1.0e-6 + 0x0E + 0xFFE0 + .1 + 1.0d0 + 1L + 1P
    #(123, 123.45, -0.00345, 1.0e-6, 0x0E, 0xFFE0, .1, 1.0d0, 1L, 1P)

    -- String
    "123.4" + "foobar"
    "\" \\\\ ()[]{}<> /* */ --"
    "
    foo
    bar
    baz
    "
    @"g:\temp\newfolder\render"
    "aaa\"bbb\\\"ccc" + @"aaa\"bbb\\\"ccc"

    -- Name
    #Foo
    #123Foo
    #Foo_Bar_123
    #'Foo Bar'

    -- Boolean
    not true and false or on /* do */ or off

    -- Color
    #(red, green, blue, white, black, orange, yellow, brown, gray)

    -- Point
    [320, 240]
    [10, 20, 30]
    [sin a, 2 * b, a^2 + b^2]

    -- Time
    2.5s + 1m15s + 2m30s5f2t + 125f + 18.25f + 1f20t + 2:10.0 + 0:0.29 --+ 0.45n

    -- Pathname
    $*dummy*
    $dummy/*
    $dummy/*/*
    $dummy/.../box*
    $dummy...box*
    $'Foo Bar'

    -- Array
    #(1, "foo", #(1.2, -4, #bar), [1, 2, 3])
    #(1, sin x, a * 2.3)

    -- BitArray
    #{1..3, 5}
  ),

  /*
  Context Expressions
  */
  fn FunctionName = (
    animate on /* do */
    at level
    in $'foo'
    at time t
    coordsys world
    about $'foot'
    undo 'Label' on /* do */
    redraw off
  ),

  /*
  Flow
  */
  fn FunctionName = (
    if a == b then (
      if b then "b" else "a"
    )
    else if a == c then (
      if c then
        "c"
      else
        "a"
    )
    else (
      case of (
        (a == d): "d"
        (a == f): (
          case g of (
            (1): "1"
            (2): "2"
            default: false
          )
        )
        default: (
          try (
            while a do (
              for i = 10 to 1 by -1 where mod i 2 == 0 while i > 3 collect
              (
                if j == 4 then (
                  continue
                )
                else if j == 8 then
                (
                  exit
                )
              )
            )
          )
          catch (
            format "%\n" (getCurrentException())
          )
        )
      )
    )
  ),

  private mapped fn FunctionName param = (
    with printAllElements on if param do param
  ),

  on obj EventName arg1 arg2 do (
    -- ...
  ),

  on Clone do /* ... */,

  on Create do (
    -- ...
  )
)
```

### MEL
{:#mel}

```mel
/*-
@param $node <string>
@param $attribute <string>
@returns <boolean>
@remarks 配列アトリビュートの場合は最後のアトリビュートをテストする。
例えば `$attribute` が `a.b.c` の場合、 `$node.a.b` の `c` の存在を確認する。
*/
proc int existsAttribute(string $node, string $attribute) {
  if (!`objExists $node`) return false;

  if (`gmatch $attribute "*\\[*\\]"`) {
    string $buffer[];
    if (`tokenize $attribute "[]" $buffer` < 2) return false;

    return `attributeQuery -ex -n $node $buffer[0]`;
  }
  else if (`gmatch $attribute "*.*"`) {
    string $buffer[];
    int $numBuffer = `tokenize $attribute "." $buffer`;
    if ($numBuffer < 2) return false;

    string $parentAttribute = $node;
    for ($i = 0; $i < $numBuffer - 1; $i++) {
      $parentAttribute += "." + $buffer[$i];
    }
    string $targetAttribute = $buffer[$numBuffer - 1];
    return `attributeQuery -ex -n $parentAttribute $targetAttribute`;
  }
  else {
    return `attributeQuery -ex -n $node $attribute`;
  }
}
```

### PowerShell
{:#powershell}

```powershell
# サービスの状態を監視して必要に応じて再起動するスクリプト

$ServiceName = "Spooler"
$LogFile = "C:\logs\service_watchdog.log"

function Log {
    param($message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp - $message" | Out-File -FilePath $LogFile -Append
}

Log "監視開始: $ServiceName"

try {
    $service = Get-Service -Name $ServiceName -ErrorAction Stop

    if ($service.Status -ne 'Running') {
        Log "サービスが停止中: 再起動を試行中"
        Start-Service -Name $ServiceName
        Start-Sleep -Seconds 2
        $status = (Get-Service -Name $ServiceName).Status
        if ($status -eq 'Running') {
            Log "再起動成功"
        } else {
            Log "再起動失敗: 現在の状態は $status"
        }
    } else {
        Log "サービスは正常に稼働中"
    }
} catch {
    Log "エラー発生: $_"
}
```

### Properties
{:#properties}

```properties
# You are reading a comment in ".properties" file.
! The exclamation mark ('!') can also be used for comments.
# Comments are ignored.
# Blank lines are also ignored.

# Lines with "properties" contain a key and a value separated by a delimiting character.
# There are 3 delimiting characters: equal ('='), colon (':') and whitespace (' ', '\t' and '\f').
website = https://en.wikipedia.org/
language : English
topic .properties files
# A word on a line will just create a key with no value.
empty
# Whitespace that appears between the key, the delimiter and the value is ignored.
# This means that the following are equivalent (other than for readability).
hello=hello
hello = hello
# To start the value with whitespace, escape it with a backslash ('\').
whitespaceStart = \ <-This space is not ignored.
# Keys with the same name will be overwritten by the key that is the furthest in a file.
# For example the final value for "duplicateKey" will be "second".
duplicateKey = first
duplicateKey = second
# To use the delimiter characters inside a key, you need to escape them with a ('\').
# However, there is no need to do this in the value.
delimiterCharacters\:\=\ = This is the value for the key "delimiterCharacters\:\=\ "
# Adding a backslash ('\') at the end of a line means that the value continues on the next line.
multiline = This line \
continues
# If you want your value to include a backslash ('\'), it should be escaped by another backslash ('\').
path = c:\\wiki\\templates
# This means that if the number of backslashes ('\') at the end of the line is even, the next line is not included in the value.
# In the following example, the value for "evenKey" is "This is on one line\".
evenKey = This is on one line\\
# This line is a normal comment and is not included in the value for "evenKey".
# If the number of backslash ('\') is odd, then the next line is included in the value.
# In the following example, the value for "oddKey" is "This is line one and\# This is line two".
oddKey = This is line one and\\\
# This is line two
# Whitespace characters at the beginning of a line is removed.
# Make sure to add the spaces you need before the backslash ('\') on the first line.
# If you add them at the beginning of the next line, they will be removed.
# In the following example, the value for "welcome" is "Welcome to Wikipedia!".
welcome = Welcome to \
          Wikipedia!
# If you need to add newlines and carriage returns, they need to be escaped using ('\n') and ('\r') respectively.
# You can also optionally escape tabs with ('\t') for readability purposes.
valueWithEscapes = This is a newline\n and a carriage return\r and a tab\t.
# You can also use Unicode escape characters (maximum of four hexadecimal digits).
# In the following example, the value for "encodedHelloInJapanese" is "こんにちは".
encodedHelloInJapanese = \u3053\u3093\u306b\u3061\u306f
# But with more modern file encodings like UTF-8, you can directly use supported characters.
helloInJapanese = こんにちは
```

### Python
{:#python}

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

### XML
{:#xml}

```xml
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```
