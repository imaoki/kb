/*! © 2025 imaoki | MIT License | https://github.com/imaoki */
class KB {
  constructor() {
    this.initHandlers = [];
    this.init();
  }

  /**
   * 初期化ハンドラーを追加する
   * @param {Function} handler - 実行する関数
   */
  addInitHandler(handler) {
    if (typeof handler === 'function') {
      this.initHandlers.push(handler);
    }
  }

  /**
   * NodeListまたは配列の各要素に対して関数を実行
   * @param {NodeList|Array} elements - 要素のリスト
   * @param {Function} fn - 実行する関数
   */
  each(elements, fn) {
    if (!elements || typeof fn !== 'function') return;

    for (const [index, element] of [...elements].entries()) {
      fn(element, index);
    }
  }

  /**
   * テキストをクリップボードにコピー
   * @param {string} textValue - コピーするテキスト
   * @returns {Promise<boolean>} - コピー成功の可否
   */
  async execCopy(textValue) {
    if (!textValue) return false;

    try {
      await navigator.clipboard.writeText(textValue);
      return true;
    }
    catch (error) {
      console.warn('クリップボードへのコピーに失敗:', error);
      return false;
    }
  }

  /**
   * 初期化処理
   */
  init() {
    const runInitHandlers = () => {
      this.initHandlers.forEach(handler => {
        try {
          handler();
        }
        catch (error) {
          console.error('初期化ハンドラーでエラーが発生しました:', error);
        }
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener("DOMContentLoaded", runInitHandlers);
    }
    else {
      Promise.resolve().then(runInitHandlers);
    }
  }
}

// グローバルに公開
window.kb = new KB();
