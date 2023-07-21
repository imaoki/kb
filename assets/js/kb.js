/*! © 2020 imaoki | MIT License | https://github.com/imaoki */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], (function () {
      return factory(root);
    }));
  } else if (typeof exports === "object") {
    module.exports = factory(root);
  } else {
    root.kb = factory(root);
  }
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this, (function (window) {
  "use strict";

  var kb = {};

  kb.initHandlers = [];

  kb.addInitHandler = function(handler) {
    kb.initHandlers.push(handler);
  };

  kb.each = function(elements, fn) {
    Array.prototype.forEach.call(elements, fn);
  };

  // icon.html用
  // テキストをコピーする
  kb.execCopy = function(textValue) {
    var dummy = document.createElement("div");
    dummy.style.position = "fixed";
    dummy.style.right = "200%";

    var pre = document.createElement("pre");
    pre.style.webkitUserSelect = "auto";
    pre.style.userSelect = "auto";

    dummy.appendChild(pre).textContent = textValue;

    document.body.appendChild(dummy);
    document.getSelection().selectAllChildren(dummy);

    var result = document.execCommand("copy");

    document.body.removeChild(dummy);

    return result;
  };

  var init = function() {
    document.addEventListener("DOMContentLoaded", function() {
      for (var i = 0, len = kb.initHandlers.length; i < len; ++i) {
        kb.initHandlers[i]();
      }
    });
  };

  init();

  return kb;
}));
