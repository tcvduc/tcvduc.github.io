/**
 *
 * @param {string} s
 */
function f(s) {
  const regexMiddleSPacings = / +/g;
  const regexLeftSpacing = /^ +/g;
  const regexRightSpacing = / +$/g;

  return s
    .replace(regexMiddleSPacings, " ")
    .replace(regexLeftSpacing, "")
    .replace(regexRightSpacing, "");
}

const s = "    abc        def    ";
console.log(f(s));
