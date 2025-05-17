/*! `diff` grammar compiled for Highlight.js 11.11.1 */
  (function(){
    var hljsGrammar = (function () {
  'use strict';

  /*
  Language: Diff
  Author: imaoki <https://github.com/imaoki>
  Description: Supports normal, context and unified format.
  Category: common
  */

  function diff(hljs) {
    const regex = hljs.regex;

    const diffRange = {
      className: 'meta',
      relevance: 10,
      variants: [
        {begin: /^[ \t]*@{2}[ \t]+-\d+(,\d+)?[ \t]+\+\d+(,\d+)?[ \t]+@{2}/},
        {begin: /^[ \t]*[\*-]{3}[ \t]+\d+,\d+[ \t]+[\*-]{4}/},
        {begin: /^[ \t]*(\d+,)?\d+[acd]\d+(,\d+)?/}
      ]
    };

    const diffComment = {
      className: 'comment',
      variants: [
        {begin: /^[ \t]*[\*\-\+]{3}.*$/},
        {begin: /^[ \t]*\\.*$/}
      ]
    };

    const diffDeletion = {
      className: 'deletion',
      begin: /^[ \t]*[-<].*$/
    };

    const diffAddition = {
      className: 'addition',
      begin: /^[ \t]*[\+>].*$/
    };

    const diffChange = {
      className: 'addition',
      begin: /^[ \t]*!.*$/
    };

    return {
      name: "Diff",
      aliases: ['patch'],
      case_insensitive: true,
      contains: [
        diffRange,
        diffComment,
        diffDeletion,
        diffAddition,
        diffChange
      ]
    };
  };

  return diff;

})();

    hljs.registerLanguage('diff', hljsGrammar);
  })();
