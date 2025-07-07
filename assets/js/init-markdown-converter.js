/*! © 2025 imaoki | MIT License | https://github.com/imaoki */
if (window.kb) {
  const initModules = {
    /**
     * 空のp要素を削除
     */
    removeBlankParagraph() {
      const emptyParagraphs = document.querySelectorAll("p");

      kb.each(emptyParagraphs, paragraph => {
        if (paragraph.childNodes.length === 0) {
          paragraph.remove();
        }
      });
    },

    /**
     * TOCを移動
     */
    moveTOC() {
      const tocElement = document.querySelector(".table-of-contents");
      const postMainElement = document.querySelector(".post.main");

      if (tocElement && postMainElement) {
        postMainElement.parentNode.insertBefore(tocElement, postMainElement);
      }
    },

    /**
     * 脚注の空白を除去
     */
    removeFootnoteSpaces() {
      const footnoteLinks = document.querySelectorAll("a[class*='reversefootnote']");

      kb.each(footnoteLinks, link => {
        const parent = link.parentNode;
        if (parent) {
          parent.innerHTML = parent.innerHTML.replace(/&nbsp;/g, "");
        }
      });
    },

    /**
     * タイトルを置換
     */
    replaceTitle() {
      // ページタイトルを取得
      let headTitleContent = "Untitled";
      const postMainH2Element = document.querySelector(".post.main > h2:first-of-type");

      if (postMainH2Element) {
        headTitleContent = postMainH2Element.textContent;
      }

      // ページタイトルを設定
      const titleElement = document.querySelector("head > title");
      if (titleElement) {
        titleElement.textContent = headTitleContent;
      }

      // ポストタイトルを設定
      const postTitleLinkElement = document.querySelector(".post.title > a");
      if (postTitleLinkElement) {
        postTitleLinkElement.textContent = headTitleContent;
      }

      // 不要になったh2要素を削除
      if (postMainH2Element) {
        postMainH2Element.remove();
      }
    },

    /**
     * 更新日を置換
     */
    replaceUpdatedDate() {
      // XPathを使用してupdate要素のdd要素を取得
      const ddXPath = "//main[contains(concat(' ', normalize-space(@class), ' '), ' post main ')]//dl[1]/dt[normalize-space(text()) = 'update']/following-sibling::dd[1]";
      const result = document.evaluate(ddXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

      if (result.singleNodeValue) {
        const ddElement = result.singleNodeValue;
        const timeElement = document.querySelector("time.date.updated");

        if (timeElement) {
          timeElement.textContent = ddElement.textContent;

          // 不要になったdl要素を削除
          const dlElement = ddElement.closest("dl");
          if (dlElement) {
            dlElement.remove();
          }
        }
      }
    },

    /**
     * pre要素にコード情報ブロック（言語名とコピーボタン）を追加
     */
    addCodeInfoBlock() {
      const preElements = document.querySelectorAll("pre");
      const languagePattern = /.*\blanguage-(\w+)\b.*/;

      kb.each(preElements, pre => {
        const codeElement = pre.querySelector("code");
        if (codeElement) {
          // 行番号を生成してdata-line-number属性に格納
          const codeText = (codeElement.textContent || codeElement.innerText).trimEnd();
          const lines = codeText.split("\n");
          const lineCount = lines.length;

          if (lineCount > 0) {
            const maxDigits = String(lineCount).length;
            const lineNumbers = [];

            for (let i = 1; i <= lineCount; i++) {
              const currentLineNumber = String(i);
              // 現在の行番号の桁数と最大桁数の差分を計算し、その分のスペースを追加
              const padding = " ".repeat(maxDigits - currentLineNumber.length);
              lineNumbers.push(padding + currentLineNumber);
            }

            pre.setAttribute("data-line-number", lineNumbers.join("\n"));
          }
          else {
            // 行数が0の場合は空文字列を設定
            pre.setAttribute("data-line-number", "");
          }

          // 言語情報を取得
          const className = codeElement.getAttribute("class") || "";
          const match = className.match(languagePattern);
          const language = match ? match[1] : "text";

          // コード情報ブロックを作成
          const codeInfoBlock = document.createElement("ul");
          codeInfoBlock.className = "code-info hlist between";

          // 言語名リスト項目
          const languageItem = document.createElement("li");
          languageItem.className = "item language";
          languageItem.textContent = language;

          // コピーボタンリスト項目
          const copyItem = document.createElement("li");
          copyItem.className = "item copy";

          const copyButton = document.createElement("span");
          copyButton.className = "button icon copy";

          copyItem.appendChild(copyButton);

          // リスト項目をコード情報ブロックに追加
          codeInfoBlock.appendChild(languageItem);
          codeInfoBlock.appendChild(copyItem);

          // pre要素の直前にコード情報ブロックを挿入
          pre.parentNode.insertBefore(codeInfoBlock, pre);

          // クリックイベントを追加
          copyButton.addEventListener("click", async () => {
            const success = await kb.execCopy(codeText);
            if (success) {
              // 成功時の視覚フィードバック
              copyButton.classList.add("success");
              setTimeout(() => {
                copyButton.classList.remove("success");
              }, 1000);
            }
            else {
              console.warn("コードのコピーに失敗しました:", codeText.substring(0, 50) + "...");
            }
          });
        }
      });
    }
  };

  // 初期化ハンドラーを登録
  kb.addInitHandler(() => {
    const initOrder = [
      'removeBlankParagraph',
      'moveTOC',
      'removeFootnoteSpaces',
      'replaceTitle',
      'replaceUpdatedDate',
      'addCodeInfoBlock'
    ];

    initOrder.forEach(moduleName => {
      try {
        initModules[moduleName]();
      }
      catch (error) {
        console.error(`${moduleName} の初期化でエラーが発生しました:`, error);
      }
    });
  });
}
