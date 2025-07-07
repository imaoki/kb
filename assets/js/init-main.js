/*! © 2025 imaoki | MIT License | https://github.com/imaoki */
if (window.kb) {
  const initModules = {
    /**
     * highlight.js初期化
     */
    highlightJs() {
      if (window.hljs) {
        hljs.highlightAll();
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
     * data-kb-copy属性を持つ要素にクリップボードコピー機能を追加
     */
    addCopyHandlers() {
      const copyElements = document.querySelectorAll("[data-kb-copy]");

      kb.each(copyElements, element => {
        const textValue = element.getAttribute("data-kb-copy");
        if (textValue) {
          element.addEventListener("click", async () => {
            const success = await kb.execCopy(textValue);
            if (success) {
              // 成功時の視覚フィードバック
              element.classList.add("success");
              setTimeout(() => {
                element.classList.remove("success");
              }, 1000);
            }
            else {
              console.warn("クリップボードへのコピーに失敗しました:", textValue);
            }
          });
        }
      });
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
      'highlightJs',
      'removeFootnoteSpaces',
      'addCopyHandlers',
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
