(function () {
  const classes = {
    count: "count",
  };

  const COUNT_0_MAX = 12000;
  const COUNT_1_MAX = 5000;
  const COUNT_2_MAX = 7000;

  /**
   *
   * @param {HTMLElement} count0
   */
  function handleIncreaseCountIndex0(count0) {
    let count = 0;
    const interval = window.setInterval(function () {
      if (count === COUNT_0_MAX) {
        count0.innerHTML = count;
        return window.clearInterval(interval);
      }
      count += 100;
      count0.innerHTML = count;
    }, 10);
  }

  /**
   *
   * @param {HTMLElement} count1
   */
  function handleIncreaseCountIndex1(count1) {
    let count = 0;
    const interval = window.setInterval(function () {
      if (count === COUNT_1_MAX) {
        count1.innerHTML = count;
        return window.clearInterval(interval);
      }
      count += 100;
      count1.innerHTML = count;
    }, 10);
  }

  /**
   *
   * @param {HTMLElement} count2
   */
  function handleIncreaseCountIndex2(count2) {
    let count = 0;
    const interval = window.setInterval(function () {
      if (count === COUNT_2_MAX) {
        count2.innerHTML = count;
        return window.clearInterval(interval);
      }
      count += 100;
      count2.innerHTML = count;
    }, 10);
  }

  /**
   *
   * @param {HTMLElement[]} counts
   */
  function handleWebPageOnload(counts) {
    /**
     * Problem: Increase count
     * + count length: 3
     * + count[0] max: 12000 - done
     * + count[1] max: 5000
     * + count[2] max: 7500
     *
     *
     */

    window.onload = function () {
      const count0 = counts[0];
      const count1 = counts[1];
      const count2 = counts[2];

      handleIncreaseCountIndex0(count0);
      handleIncreaseCountIndex1(count1);
      handleIncreaseCountIndex2(count2);
    };
  }

  function main() {
    const counts = window.document.getElementsByClassName(classes.count);
    handleWebPageOnload(counts);
  }

  main();
})();
