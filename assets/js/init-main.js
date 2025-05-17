/*! © 2020 imaoki | MIT License | https://github.com/imaoki */
if (window.kb) {
  kb.addInitHandler(function() {
    // highlight.js初期化
    if (window.hljs) {
      hljs.highlightAll();
    }

    // SmoothScroll初期化
    if (window.SmoothScroll) {
      new window.SmoothScroll("a[href*='#']", {
        speed: 75,
        easing: "easeOutQuint"
      })
    }

    // リンク画像にクラスを追加
    kb.each(document.getElementsByTagName("a"), function(el, i) {
      if (el.getElementsByTagName("img").length) {
        el.classList.add("image");
      }
    });

    // 整形済みテキストの言語情報をクラス化
    kb.each(document.getElementsByTagName("pre"), function(el, i) {
      var re = /.*\blanguage-(\w+)\b.*/;
      var elements = el.getElementsByTagName("code");
      if (elements.length) {
        var classValue = elements[0].getAttribute("class");
        var dataType = "text";
        if (classValue.match(re)) {
          dataType = classValue.replace(re, "$1");
        }
        el.setAttribute("data-type", dataType);
      }
    });

    // 脚注の空白を除去
    kb.each(document.querySelectorAll("a[class*='reversefootnote']"), function(el, i) {
      var parentNode = el.parentNode;
      if (parentNode) {
        parentNode.innerHTML = parentNode.innerHTML.replace("&nbsp;", "");
      }
    });

    // PhotoSwipe初期化
    if (window.PhotoSwipe && window.photoswipeSimplify) {
      window.photoswipeSimplify.init({
        bgOpacity: 0.9,
        history: false,
        shareEl: false,
        zoomEl: true
      });
    }
  });
}
