/**
 * Problem: Given an html content as bellow
 *    <div class="barContent">
 *         <div class="navigationTo">Home</div>
 *         <div class="navigationTo">About</div>
 *         <div class="navigationTo">Trainer</div>
 *         <div class="navigationTo">Plans</div>
 *         <div class="navigationTo">FAQ</div>
 *         <div class="navigationTo">Pages</div>
 *    </div>
 * it has been written in "19.html" file.
 * Use file handle technical to add
 * <a href=""></a> tag.
 *
 *
 */

const fs = require("fs");

/**
 *
 * @param {String} s
 */
function detectNavigationToClassDivTag(s) {
  const factor = "navigationTo";

  for (let i = 0; i <= s.length - 1; ++i) {}
}

/**
 *
 * @param {String} s1
 * @param {String} s2
 *
 */
function isTwoStringTheSame(s1, s2) {
  if (s1.length !== s2.length) return false;

  let flag = true;

  for (let i = s1.length - 1; i >= 0; --i) {
    if (s1[i] !== s2[i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

function handleFile19HTML() {
  const path = "../portfolio-shred/19.launchkit-clone/live-demo/19.html";

  const factor = "navigationTo";
  const delta = factor.length - 1;

  fs.readFile(path, (err, data) => {
    const fileText = data.toString();
    // console.log(fileText);

    for (let i = 0; i <= fileText.length - 1; ++i) {
      if (fileText[i] === factor[0]) {
        let stringTraverse = "";
        for (let j = 0; j <= delta; ++j) {
          stringTraverse += fileText[i + j];
        }

        if (isTwoStringTheSame(factor, stringTraverse)) {
          console.log(1);
        }
      }
    }
  });
}

handleFile19HTML();
