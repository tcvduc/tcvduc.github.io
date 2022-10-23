(function () {
  const classes = {
    active: "active",
    textareaEnterChoices: "textareaEnterChoices",
    preventDrag: "preventDrag",
    choice: "choice",
    layerChoices: "layerChoices",
  };

  let currentTextAreaText = "";

  /**
   *
   * @param {HTMLTextAreaElement} textareaEnterChoices
   */
  function preventTextareaDraggable(textareaEnterChoices) {
    textareaEnterChoices.classList.add(classes.preventDrag);
  }

  /**
   *
   * @param {string} s
   * @param {string} factor
   */
  function split(s, factor) {
    /**
     * Problem:
     * + s: "abc,def,qwe,rty"
     * + factor: ,
     * + ret: ["abc","def","qwe","rty"]
     *
     */
    const ret = [];

    let traverseString = "";
    for (let i = 0; i <= s.length - 1; ++i) {
      if (s[i] === ",") {
        ret.push(traverseString);
        traverseString = "";
      }

      if (s[i] !== ",") {
        traverseString += s[i];
      }

      if (i === s.length - 1) {
        ret.push(traverseString);
      }
    }

    return ret;
  }

  /**
   *
   * @param {string} s
   */
  function wasEmptyString(s) {
    return s === "";
  }

  /**
   *
   * @param {string} s
   */
  function wasDownLine(s) {
    const regex = /\n/g;
    return regex.test(s);
  }

  /**
   *
   * @param {string} s
   */
  function advanceTrim(s) {
    /**
     * - s = "
     *  abc    def
     * "
     * - ret ="abc def"
     *
     */
    const regexDownLine = /\n/g;
    const regexMultipleEmpties = / +/g;
    const regexBeginEmpty = /^ +/g;
    const regexEndEmpty = / +$/g;

    return s
      .replace(regexDownLine, "")
      .replace(regexMultipleEmpties, " ")
      .replace(regexBeginEmpty, "")
      .replace(regexEndEmpty, "");
  }

  /**
   *
   * @param {HTMLTextAreaElement} textareaEnterChoices
   * @param {HTMLElement} layerChoices
   *
   */
  function textareaEnterChoicesOnkeyupHandle(
    textareaEnterChoices,
    layerChoices
  ) {
    textareaEnterChoices.onkeyup =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        const text = event.target.value;
        const textTrimmed = advanceTrim(text);
        const splittedText = split(textTrimmed, ",");
        let ret = "";
        splittedText.forEach(function (text) {
          if (wasEmptyString(text) || wasDownLine(text)) {
            return;
          }
          const choiceElement = createChoiceVirtualElement(text);
          ret += choiceElement;
        });
        layerChoices.innerHTML = ret;

        keyboardEnterHandler(textTrimmed);
      };
  }

  /**
*
* @param {number} min
* @param {number} max

*/
  function getRandomNumber(min, max) {
    /**
     * - min: 0
     * - max: 5
     * - ret: 0 -> 5
     *
     */
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
   *
   * @param {HTMLElement[]} choices
   */
  function animateRandomChoices(choices) {
    /**
     * Problem: Random Choices Animation
     * + a = [element_1, element_2,..., element_k]
     * + ret
     *    + In 5 seconds, add active class
     *    to random index in the input array
     *    + element_1_active
     *    + element_2_active
     *    + element_3_active
     *
     *
     *
     *
     */
    const arrayMinIndex = 0;
    const arrayMaxIndex = choices.length - 1;
    let timeVariable = 5000;

    const interval = window.setInterval(function () {
      if (timeVariable === 0) {
        return window.clearInterval(interval);
      }
      const randomIndex = getRandomNumber(arrayMinIndex, arrayMaxIndex);
      for (let i = choices.length - 1; i >= 0; --i) {
        choices[i].classList.remove(classes.active);
      }

      choices[randomIndex].classList.add(classes.active);

      timeVariable -= 125;
    }, 125);
  }

  /**
   *
   * @param {string} text
   */
  function keyboardEnterHandler(text) {
    window.onkeyup =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        const key = event.key;

        if (key === "Enter") {
          /**
           * Problem
           * + key = enter
           *   + text area contains text
           *     + display random choices
           *     animation
           *   + text area not contains text
           *     + reset animation
           *
           */
          if (text === "") {
            window.location.reload();
            return;
          }

          if (text !== "") {
            const choices = window.document.getElementsByClassName(
              classes.choice
            );
            animateRandomChoices(choices);
          }
        }
      };
  }

  /**
   *
   * @param {string} text
   */
  function createChoiceVirtualElement(text) {
    const ret = `<div class="${classes.choice}" >${text}</div>`;
    return ret;
  }

  function main() {
    const textareaEnterChoices = window.document.getElementsByClassName(
      classes.textareaEnterChoices
    )[0];
    const layerChoices = window.document.getElementsByClassName(
      classes.layerChoices
    )[0];

    preventTextareaDraggable(textareaEnterChoices);
    textareaEnterChoicesOnkeyupHandle(textareaEnterChoices, layerChoices);
  }

  main();
})();
