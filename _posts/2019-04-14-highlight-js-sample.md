---
title: highlight.js サンプル
date: 2019-04-14 16:57:00 +09:00
updated: 2025-05-18 00:03:00 +09:00
categories: sample
tags: javascript markdown
toc: true
published: true
---
### CSS
{:#css}

```css
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
```

### Diff
{:#diff}

Normal
: ```diff
  1,2d0
  < The Way that can be told of is not the eternal Way;
  < The name that can be named is not the eternal name.
  4c2,3
  < The Named is the mother of all things.
  ---
  > The named is the mother of all things.
  >
  11a11,13
  > They both may be called deep and profound.
  > Deeper and more profound,
  > The door of all subtleties!
  ```

Context
: ```diff
  *** lao	2002-02-21 23:30:39.942229878 -0800
  --- tzu	2002-02-21 23:30:50.442260588 -0800
  ***************
  *** 1,5 ****
  - The Way that can be told of is not the eternal Way;
  - The name that can be named is not the eternal name.
    The Nameless is the origin of Heaven and Earth;
  ! The Named is the mother of all things.
    Therefore let there always be non-being,
  --- 1,4 ----
    The Nameless is the origin of Heaven and Earth;
  ! The named is the mother of all things.
  !
    Therefore let there always be non-being,
  ***************
  *** 11 ****
  --- 10,13 ----
      they have different names.
  + They both may be called deep and profound.
  + Deeper and more profound,
  + The door of all subtleties!
  ```

Unified
: ```diff
  --- lao	2002-02-21 23:30:39.942229878 -0800
  +++ tzu	2002-02-21 23:30:50.442260588 -0800
  @@ -1,7 +1,6 @@
  -The Way that can be told of is not the eternal Way;
  -The name that can be named is not the eternal name.
  The Nameless is the origin of Heaven and Earth;
  -The Named is the mother of all things.
  +The named is the mother of all things.
  +
  Therefore let there always be non-being,
    so we may see their subtlety,
  And let there always be being,
  @@ -9,3 +8,6 @@
  The two are the same,
  But after they are produced,
    they have different names.
  +They both may be called deep and profound.
  +Deeper and more profound,
  +The door of all subtleties!
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
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export $initHighlight;
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
proc string[] getSelectedLights() {
  string $selectedLights[];

  string $select[] = `ls -sl -dag -leaf`;

  for ($shape in $select) {
    // Determine if this is a light.
    //
    string $class[] = getClassification(`nodeType $shape`);

    if ((`size $class`) > 0 && ("light" == $class[0])) {
      $selectedLights[`size $selectedLights`] = $shape;
    }
  }

  // Result is an array of all lights included in

  // current selection list.
  return $selectedLights;
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
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
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
