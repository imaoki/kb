/*! `ebnf` grammar compiled for Highlight.js 11.11.1 */
  (function(){
    var hljsGrammar = (function () {
  'use strict';

  /*
  Language: Extended Backus-Naur Form
  Author: imaoki <https://github.com/imaoki>
  */

  function ebnf(hljs) {
    const regex = hljs.regex;

    const ebnfIdentifier = {
      className: 'keyword',
      begin: /[a-zA-Z][a-zA-Z0-9_-]*/
    };

    const ebnfString = {
      className: 'string',
      begin: /".*?"/
    };

    const ebnfSingleQuotString = {
      className: 'string',
      begin: /'.*?'/
    };

    const ebnfComment = {
      className: 'comment',
      begin: /\(\*/, end: /\*\)/
    };

    const ebnfSpecialSequence = {
      className: 'meta',
      begin: /\?[^\?]+?\?/
    };

    const ebnfTermination = {
      className: 'title',
      begin: /;$/
    };

    return {
      name: "Extended Backus-Naur Form",
      case_insensitive: true,
      contains: [
        ebnfIdentifier,
        ebnfString,
        ebnfSingleQuotString,
        ebnfComment,
        ebnfSpecialSequence,
        ebnfTermination
      ]
    };
  };

  return ebnf;

})();

    hljs.registerLanguage('ebnf', hljsGrammar);
  })();
