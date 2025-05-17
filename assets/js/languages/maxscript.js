/*! `maxscript` grammar compiled for Highlight.js 11.11.1 */
  (function(){
    var hljsGrammar = (function () {
  'use strict';

  /*
  Language: MAXScript
  Author: imaoki <https://github.com/imaoki>
  Description: MAXScript is the built-in scripting language of 3ds Max.
  Category: graphics
  */

  function maxscript(hljs) {
    const regex = hljs.regex;

    const mxsKeywords = {
      // className: 'keyword',
      keyword: 'about and animate as at by case catch collect continue coordsys do else exit fn for from function global if in local macroscript mapped max not of off on or parameters persistent plugin private public rcmenu return rollout set struct then throw to tool try undo utility when where while with',
      literal: 'black blue brown dontcollect e false gray green ok orange pi red true undefined unsupplied white x_axis y_axis yellow z_axis',
      params: 'activegrid activemeditslot ambientcolor ambientcolorcontroller animationrange animbuttonenabled animbuttonstate backgroundcolor backgroundcolorcontroller backgroundimagefilename currentmateriallibrary currenttime displaygamma displaysafeframes editorfont editorfontsize editorshowpath editortabwidth enableaccelerators environmentmap escapeenable fileingamma fileoutgamma flyofftime framerate globaltracks hardwarelockid heapfree heapsize hotspotangleseparation inputtextcolor lightlevel lightlevelcontroller lighttintcolor lighttintcolorcontroller listener localprerendscript localtime lyricdirectory macrorecorder manipulatemode maxfilename maxfilepath messagetextcolor numatmospherics numeffects numsubobjectlevels outputtextcolor playactiveonly playbackloop postrendscript prerendscript productappid realtimeplayback rendatmosphere rendcamnode rendcolorcheck renddither256 renddithertrue rendend renderdisplacements rendereffects renderer renderheight renderpixelaspect renderpresetmrulist renderwidth rendfieldorder rendfieldrender rendfilenumberbase rendforce2side rendhidden rendimageaspectratio rendimgseqtype rendlockimageaspectratio rendlockpixelaspectratio rendmultithread rendnthframe rendnthserial rendntsc_pal rendoutputfilename rendpickupframes rendpixelaspectratio rendsavefile rendshowvfb rendsimplifyarealights rendstart rendsuperblack rendsuperblackthresh rendtimetype renduseactiveview rendusedevice renduseimgseq rendusenet rendvidcorrectmethod rendviewid rendviewindex rootnode rootscene scenematerials scriptspath showendresult skiprenderedframes slidertime stacklimit subobjectlevel superclasses ticksperframe timedisplaymode trackviewnodes useenvironmentmap usepostrendscript useprerendscript videoposttracks'
    };

    const mxsIdentifier = {
      className: 'identifier',
      begin: /[a-zA-Z_][a-zA-Z_0-9]*/,
      keywords: mxsKeywords
    };

    const mxsQuotedIdentifier = {
      className: 'string',
      begin: /'/, end: /'/,
      contains: [hljs.BACKSLASH_ESCAPE]
    };

    const mxsName = {
      className: 'string',
      begin: /\#[a-zA-Z_0-9]+/
    };

    const mxsNumber = {
      className: 'number',
      begin: /-?((0[xX][a-fA-F0-9]+|0[xX])[LP]?|[0-9]+\.(?!\.)[0-9]*([eEdD][\+-]?[0-9]+)?|\.[0-9]+([eEdD][\+-]?[0-9]+)?|[0-9]+([LP]|[eEdD][\+-]?[0-9]+)?)/
    };

    const mxsString = {
      className: 'string',
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE]
    };

    const mxsVerbatim = {
      className: 'string',
      begin: /@"/, end: /"/
    };

    const mxsTime = {
      className: 'number',
      begin: /-?((0[xX][a-fA-F0-9]+|0[xX])[mst]|(([0-9]+\.[0-9]*|\.[0-9]+|[0-9]+)[msft])+|[0-9]+:([0-9]+\.[0-9]*|\.[0-9]+)|([0-9]+\.[0-9]*|\.[0-9]+|[0-9]+)n)/
    };

    const mxsPathName = {
      className: 'string',
      begin: /\$([a-zA-Z0-9_\*\?\\\/]|\.{3})*/
    };

    const mxsBlockComment = {
      className: 'comment',
      begin: /\/\*/, end: /\*\//
    };

    const mxsLineComment = {
      className: 'comment',
      begin: /--/, end: /$/
    };

    return {
      name: "MAXScript",
      aliases: ['mxs'],
      case_insensitive: true,
      keywords: mxsKeywords,
      contains: [
        mxsBlockComment,
        mxsLineComment,
        mxsIdentifier,
        mxsQuotedIdentifier,
        mxsTime,
        mxsNumber,
        mxsString,
        mxsVerbatim,
        mxsName,
        mxsPathName
      ]
    };
  };

  return maxscript;

})();

    hljs.registerLanguage('maxscript', hljsGrammar);
  })();
