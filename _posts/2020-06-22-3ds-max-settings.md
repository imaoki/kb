---
title: 3ds Max 設定
date: 2020-06-22 18:22:00 +09:00
updated: 2025-07-14 16:08:00 +09:00
categories: note
tags: 3dsmax
toc: true
published: true
---
3ds Maxの設定。

### Preferences
{:#preferences}

| タブ             | グループ                     | 項目                                    | 値                     |
| ---------------- | ---------------------------- | --------------------------------------- | ---------------------- |
| General          | Scene Undo                   | Levels                                  | `200`                  |
| General          | Spinners                     | Precision                               | `4`                    |
| General          | Spinners                     | Wrap Cursor Near Spinner                | `True`                 |
| General          | UI Display                   | Enable Caddy Controls                   | `False`                |
| General          | UI Display                   | Display Topology-Dependence Warning     | `False`                |
| General          | UI Display                   | Display Stack Collapse Warning          | `False`                |
| General          | UI Display                   | Fixed Width Text Buttons                | `90`                   |
| Files            | File Handling                | Recent Files in Menu                    | `50`                   |
| Files            | Auto Backup                  | Number of Autobak files                 | `99`                   |
| Files            | Auto Backup                  | Backup Interval                         | `2.0`                  |
| Files            | File String Data Handling    | Default Language                        | `Japanese`             |
| Viewports        | Viewport Parameters          | Backface Cull on Object Creation        | `False`                |
| Viewports        | Selection/Preview Highlights |                                         | `False`                |
| Interaction Mode | Interaction                  | Set my mouse and keyboard ineraction to | `Maya`                 |
| Gamma and LUT    |                              | Enable Gamma/LUT Correction             | プロジェクトに合わせる |
| Animation        | Key Bracket Display          |                                         | `Selected Objects`     |
| Gizmos           | Move/Rotate Transforms       | Rotation Increment                      | `0.1`                  |
| MAXScript        | MAXScript Windows            | Font                                    | `Hackgen Regular`      |
| MAXScript        | MAXScript Windows            | Font size                               | `10`                   |

### Custom User Interface
{:#custom-user-interface}

| タブ  | グループ      | 項目                                | 値     |
| ----- | ------------- | ----------------------------------- | ------ |
| Mouse | Mouse Control | Right Click Menu Over Selected Only | `True` |

### Hotkey
{:#hotkey}

| Action                        | Hotkey                        | Group   | Category                |
| ----------------------------- | ----------------------------- | ------- | ----------------------- |
| Back View                     | `K`{:.key}                    | Main UI | Views                   |
| Backface Cull Toggle          | `Alt+B`{:.key}                | Main UI | Tools                   |
| Backup Time One Unit          | `Alt+,`{:.key}                | Main UI | Time                    |
| Cap (Poly)                    |                               | Main UI | Editable Polygon Object |
| Center Point Cycle            | `Alt+P`{:.key}                | Main UI | Tools                   |
| Create Command Mode           | `NumPad 1`{:.key}             | Main UI | Tools                   |
| Cycle Selection Method        |                               | Main UI | Tools                   |
| Disable Viewport              |                               | Main UI | Views                   |
| Display Command Mode          | `NumPad 5`{:.key}             | Main UI | Tools                   |
| Display Floater Toggle        | `Ctrl+Shift+D`{:.key}         | Main UI | Edit                    |
| Extrude Face (Poly)           |                               | Main UI | Editable Polygon Object |
| Forward Time One Unit         | `Alt+.`{:.key}                | Main UI | Time                    |
| Front View                    |                               | Main UI | Views                   |
| Go to End Frame               | `End`{:.key}, `Alt+L`{:.key}  | Main UI | Time                    |
| Go to Start Frame             | `Home`{:.key}, `Alt+K`{:.key} | Main UI | Time                    |
| GotoNextKeyTime               | `.`{:.key}                    | Main UI | * - Command             |
| GotoPreviousKeyTime           | `,`{:.key}                    | Main UI | * - Command             |
| Hide Frozen Objects Toggle    | `Ctrl+Shift+F`{:.key}         | Main UI | Tools                   |
| Hide Geometry Toggle          | `Alt+2`{:.key}                | Main UI | Views                   |
| Hide Space Warps Toggle       |                               | Main UI | Views                   |
| Hierarchy Command Mode        | `NumPad 3`{:.key}             | Main UI | Tools                   |
| InitializeCenterPoint         | `Ctrl+Alt+Shift+Space`{:.key} | Main UI | * - Command             |
| Local Coordinate System       | `Ctrl+Shift+L`{:.key}         | Main UI | Coordinate System       |
| Merge File                    | `Ctrl+Shift+M`{:.key}         | Main UI | File                    |
| Modify Command Mode           | `NumPad 2`{:.key}             | Main UI | Tools                   |
| Motion Command Mode           | `NumPad 4`{:.key}             | Main UI | Tools                   |
| Next/Previous Key Mode Toggle |                               | Main UI | Tools                   |
| Pan View                      |                               | Main UI | Views                   |
| Pan Viewport                  |                               | Main UI | Tools                   |
| Parameter Collector           |                               | Main UI | Parameter Collector     |
| Parent Coordinate System      | `Ctrl+Shift+P`{:.key}         | Main UI | Coordinate System       |
| Percent Snap Toggle           |                               | Main UI | Snaps                   |
| Properties                    | `Ctrl+P`{:.key}               | Main UI | Edit                    |
| Reset File                    | `Ctrl+Shift+R`{:.key}         | Main UI | File                    |
| Right View                    | `I`{:.key}                    | Main UI | Views                   |
| Save File As                  | `Ctrl+Alt+S`{:.key}           | Main UI | File                    |
| Save Incremental (+)          |                               | MainUI  | File                    |
| Screen Coordinate System      | `Ctrl+Shift+S`{:.key}         | Main UI | Coordinate System       |
| Select Object                 | `Q`{:.key}                    | Main UI | Selection               |
| Select Sub-object Loop        |                               | Main UI | Editable Polygon Object |
| Set Keys                      |                               | Main UI | Set Key Tools           |
| Show Motion Paths             | `Alt+M`{:.key}                | Main UI | Tools                   |
| Smart Select                  |                               | Main UI | Selection               |
| Utility Command Mode          | `NumPad 6`{:.key}             | Main UI | Tools                   |
| Viewport Background           |                               | Main UI | Views                   |
| Virtual Viewport Pan Down     |                               | Main UI | Tools                   |
| Virtual Viewport Pan Left     |                               | Main UI | Tools                   |
| Virtual Viewport Pan Right    |                               | Main UI | Tools                   |
| Weld (Poly)                   |                               | Main UI | Editable Polygon Object |
| World Coordinate System       | `Ctrl+Shift+W`{:.key}         | Main UI | Coordinate System       |
| Zoom Extents Selected         | `F`{:.key}                    | Main UI | Tools                   |

### Default Controller
{:#default-controller}

| 種類     | クラス       |
| -------- | ------------ |
| Rotation | TCB Rotation |

### MaxStart.max
{:#maxstart-max}

| 場所                         | タブ       | グループ           | 項目                 | 値                |
| ---------------------------- | ---------- | ------------------ | -------------------- | ----------------- |
| Grid and Snap Settings       | Options    | General            | Angle                | `2.5`             |
| Status Bar Controls          |            |                    | Adaptive Degradation | `False`           |
| System Unit Setup            |            | System Unit Scale  | 1 Unit               | `1.0 Centimeters` |
| Units Setup                  |            | Display Unit Scale |                      | `Generic Units`   |
| Viewport Configuration       | Statistics | Setup              |                      | `Selection`       |
| Viewport Configuration       | Statistics | Setup              | Edge Count           | `False`           |
| Viewport Configuration       | Statistics | Setup              | Frames Per Second    | `True`            |
| Viewport Configuration       | Statistics | Setup              | Polygon Count        | `False`           |
| Viewport Configuration       | Statistics | Setup              | Triangle Count       | `True`            |
| Viewport Configuration       | Statistics | Setup              | Vertex Count         | `True`            |
| Viewport Per-View Preference |            |                    | Viewport Background  | `Solid Color`     |

### Viewport
{:#viewport}

| 項目  | 値                |
| ----- | ----------------- |
| Orbit | `Orbit SubObject` |

### SciTEの設定
{:#scite-settings}

MXS_EditorUser.properties
: `C:\Users\<UserName>\AppData\Local\Autodesk\3dsMax\<Version>\ENU` に配置。

  ```properties
  # Global initialization file for MXS_SciTE
  # Documentation at http://www.scintilla.org/SciTEDoc.html

  # Sizes and visibility in edit pane
  fold.margin.colour=#707070
  fold.margin.highlight.colour=#707070

  # Element styles
  view.eol=1
  view.whitespace=1
  # caret color and settings
  caret.fore=#AFAFAF
  #caret.width=2
  caret.line.back=#FFFFFF
  caret.line.back.alpha=16
  # selection color and settings
  selection.fore=#FFD802
  selection.back=#2D46B3
  selection.alpha=256

  # Indentation
  tabsize=2
  #tab.size.filepattern=2
  tab.size.$(file.patterns.MAXScript)=2
  indent.size=2
  #indent.size.filepattern=2
  indent.size.$(file.patterns.MAXScript)=2
  use.tabs=0
  use.tabs.$(file.patterns.MAXScript)=0
  #indent.auto=0
  tab.indents=1
  backspace.unindents=1
  indent.automatic=0
  #indent.maintain.filepattern=1
  indent.maintain.$(file.patterns.MAXScript)=1

  # Behaviour
  eol.mode=LF
  eol.auto=0

  # Status Bar
  statusbar.number=2
  statusbar.text.1=$(SelLength) chars selected. | Line:$(LineNumber) Column:$(ColumnNumber) | ($(EOLMode)) | $(Encoding) | $(OverType) | $(FileAttr)
  statusbar.text.2=$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  statusbar.text.3=Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  statusbar.text.4=$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)

  # Internationalisation
  character.set=128
  code.page=65001

  # Give symbolic names to the set of fonts used in the standard styles.
  font.base=font:HackGen,size:10
  font.small=font:HackGen,size:10
  font.comment=font:HackGen,size:10
  font.text=font:HackGen,size:10
  font.text.comment=font:HackGen,size:10
  font.embedded.base=font:HackGen,size:10
  font.embedded.comment=font:HackGen,size:10
  font.monospace=font:HackGen,size:10

  # Give symbolic names to the set of colours used in the standard styles.
  colour.global.back=#282828
  colour.global.fore=#E0E2E4
  colour.code.comment.line=fore:#D293B3
  colour.code.comment.box=fore:#D293B3
  colour.code.comment.doc=$(colour.code.comment.box)
  colour.code.comment.nested=$(colour.code.comment.box)
  colour.text.comment=$(colour.code.comment.box)
  colour.other.comment=$(colour.code.comment.box)
  colour.embedded.comment=$(colour.code.comment.box)
  colour.notused=back:#FF0000
  colour.brace.highlight=fore:#00AA00
  colour.brace.incomplete=fore:#AA0000
  colour.indentationguide=fore:#404040,back:$(colour.global.back)
  colour.linenumbers=back:#707070,fore:#000000
  colour.whitespace=fore:#404040
  colour.foldmargin=$(colour.indentationguide)
  colour.number=fore:#FF9933
  colour.keyword=fore:#99CC66
  colour.reserved=fore:#99CCFF
  colour.string=fore:#FF9999
  colour.string.verbatim=fore:#FF7070
  colour.string.open=fore:#FFBBBB,back:#342727
  colour.char=fore:#FF99FF
  colour.operator=fore:#DADADA
  colour.argument=fore:#B0DB94
  #colour.argument=fore:#3983E6
  colour.preproc=fore:#99CC66
  colour.pathname=fore:#59B344
  colour.function=fore:#80B6FF
  colour.class=fore:#B18AE6
  colour.maxclass=fore:#60A030
  colour.superclass=fore:#4479D6
  colour.coreinterface=fore:#4479D6
  colour.objectset=fore:#D0B080
  colour.struct=fore:#804020
  colour.constantglobals=fore:#99CCFF
  colour.globals=fore:#F05F92
  colour.user=fore:#FF0000
  colour.structFPS=fore:#A0A0FF

  # Maxscript.properties style overrides ( those override the properties in maxscript.properties )
  # Keywords13 - structure and FPS properties
  style.MAXScript.24=$(colour.structFPS)
  # Line number
  style.MAXScript.33=$(colour.linenumbers)
  # Brace highlight
  style.MAXScript.34=$(colour.brace.highlight)
  # Brace incomplete highlight
  style.MAXScript.35=$(colour.brace.incomplete)
  # Control characters
  style.MAXScript.36=
  # Indentation guides
  style.MAXScript.37=$(colour.indentationguide)
  ################################################################################
  # Default
  style.MAXScript.32=back:$(colour.global.back),fore:$(colour.global.fore)
  # White space
  style.MAXScript.0=$(colour.whitespace)
  # Comment: /* */.
  style.MAXScript.1=$(colour.code.comment.box)
  # Line Comment: --.
  style.MAXScript.2=$(colour.code.comment.line),eolfilled
  # Number
  style.MAXScript.3=$(colour.number)
  # String
  style.MAXScript.4=$(colour.string)
  # Verbatim strings
  style.MAXScript.5=$(colour.string.verbatim),eolfilled
  # End of line where string is not closed
  style.MAXScript.6=$(colour.string.open),eolfilled
  # Identifiers
  style.MAXScript.7=
  # Operators
  style.MAXScript.8=$(colour.operator)
  # Keyword arg name
  style.MAXScript.9=$(colour.argument)
  # Name value
  style.MAXScript.10=$(colour.char)
  # Pathname
  style.MAXScript.11=$(colour.pathname)
  # Keywords1 - Keywords
  style.MAXScript.12=$(colour.keyword)
  # Keywords2 - Rollout controls
  style.MAXScript.13=$(colour.preproc)
  # Keywords3 - Functions
  style.MAXScript.14=$(colour.function)
  # Keywords4 - MXS Classes
  style.MAXScript.15=$(colour.class)
  # Keywords5 - MAXClasses
  style.MAXScript.16=$(colour.maxclass)
  # Keywords6 - MAXSuperClasses
  style.MAXScript.17=$(colour.superclass)
  # Keywords7 - Core interfaces
  style.MAXScript.18=$(colour.coreinterface)
  # Keywords8 - Object sets
  style.MAXScript.19=$(colour.objectset)
  # Keywords9 - StructDefs
  style.MAXScript.20=$(colour.struct)
  # Keywords10 - Const reserved globals
  style.MAXScript.21=$(colour.constantglobals)
  # Keywords11 - Reserved globals
  style.MAXScript.22=$(colour.globals)
  # Keywords12 - User defined
  style.MAXScript.23=$(colour.user)

  # User defined key commands
  user.context.menu=||UTF-8|IDM_ENCODING_UCOOKIE|

  # has no effect in 3ds Max's (old) Scintilla version
  find.use.strip=1
  replace.use.strip=1
  ```

<!--
maxscript.properties
: ```diff
  --- Default/maxscript.properties
  +++ 3ds Max 2018/maxscript.properties
  @@ -74 +74 @@
  -style.MAXScript.0=fore:#808080
  +style.MAXScript.0=fore:#D0D0D0
  @@ -90 +90 @@
  -style.MAXScript.8=$(colour.operator),bold
  +style.MAXScript.8=$(colour.operator)
  @@ -98 +98 @@
  -style.MAXScript.12=$(colour.keyword),bold
  +style.MAXScript.12=$(colour.keyword)
  @@ -100 +100 @@
  -style.MAXScript.13=$(colour.preproc),bold
  +style.MAXScript.13=$(colour.preproc)
  @@ -110 +110 @@
  -style.MAXScript.18=fore:#00B040,italics
  +style.MAXScript.18=fore:#00B040
  @@ -112 +112 @@
  -style.MAXScript.19=fore:#D0B080,italics
  +style.MAXScript.19=fore:#D0B080
  @@ -114 +114 @@
  -style.MAXScript.20=fore:#804020,italics
  +style.MAXScript.20=fore:#804020
  @@ -116 +116 @@
  -style.MAXScript.21=fore:#3060A0,italics
  +style.MAXScript.21=fore:#3060A0
  @@ -120 +120 @@
  -style.MAXScript.23=fore:#FF0000,bold,italics
  +style.MAXScript.23=fore:#FF0000
  ```

MXS_Editor.properties
: ```diff
  --- Default/MXS_Editor.properties
  +++ 3ds Max 2018/MXS_Editor.properties
  @@ -56 +56 @@
  -#view.eol=1
  +view.eol=1
  @@ -59 +59 @@
  -view.whitespace=0
  +view.whitespace=1
  @@ -108,4 +108,6 @@
  -tabsize=8
  -indent.size=8
  -use.tabs=1
  -#indent.auto=1
  +tabsize=2
  +tab.size.$(file.patterns.MAXScript)=2
  +indent.size=2
  +indent.size.$(file.patterns.MAXScript)=2
  +use.tabs=0
  +indent.auto=0
  @@ -116 +118,2 @@
  -#backspace.unindents=0
  +backspace.unindents=1
  +indent.maintain.$(file.patterns.MAXScript)=1
  @@ -151,2 +154,2 @@
  -#eol.mode=LF
  -eol.auto=1
  +eol.mode=LF
  +eol.auto=0
  @@ -173,9 +176,5 @@
  -statusbar.number=4
  -statusbar.text.1=\
  -li=$(LineNumber) co=$(ColumnNumber) offset=$(CharOffset) $(OverType) ($(EOLMode)) $(FileAttr)
  -statusbar.text.2=\
  -$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  -statusbar.text.3=\
  -Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  -statusbar.text.4=\
  -$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)
  +statusbar.number=2
  +statusbar.text.1=$(SelLength) chars selected. | Line:$(LineNumber) Column:$(ColumnNumber) | ($(EOLMode)) | $(Encoding) | $(OverType) | $(FileAttr)
  +statusbar.text.2=$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  +statusbar.text.3=Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  +statusbar.text.4=$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)
  @@ -184 +183 @@
  -code.page=-1
  +#code.page=-1
  @@ -189 +188 @@
  -#character.set=128
  +character.set=128
  @@ -191 +190 @@
  -#code.page=65001
  +code.page=65001
  @@ -246,3 +245,3 @@
  -font.base=font:Verdana,size:10
  -font.small=font:Verdana,size:8
  -font.comment=font:Comic Sans MS,size:9
  +font.base=font:Ricty Diminished Discord,size:10
  +font.small=font:Ricty Diminished Discord,size:10
  +font.comment=font:Ricty Diminished Discord,size:10
  @@ -253,5 +252,5 @@
  -font.text=font:Times New Roman,size:11
  -font.text.comment=font:Verdana,size:9
  -font.embedded.base=font:Verdana,size:9
  -font.embedded.comment=font:Comic Sans MS,size:8
  -font.monospace=font:Courier New,size:10
  +font.text=font:Ricty Diminished Discord,size:10
  +font.text.comment=font:Ricty Diminished Discord,size:10
  +font.embedded.base=font:Ricty Diminished Discord,size:10
  +font.embedded.comment=font:Ricty Diminished Discord,size:10
  +font.monospace=font:Ricty Diminished Discord,size:10
  @@ -303,2 +302,2 @@
  -print.header.style=font:Arial,size:12,bold
  -print.footer.style=font:Arial Narrow,size:10,italics
  +print.header.style=font:Ricty Diminished Discord,size:10
  +print.footer.style=font:Ricty Diminished Discord,size:10
  @@ -344,2 +343,3 @@
  -#user.context.menu=\
  -#||\
  +user.context.menu=\
  +||\
  +UTF-8|IDM_ENCODING_UCOOKIE|
  ```
-->
