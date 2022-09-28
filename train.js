/**
 *
 * @param {string} s
 */
function f(s) {
  /**
   * - s = "
   *       abc     def
   * "
   * - ret = "abc def"
   *
   * + step 1: regex detect all `\n`, replace it by "" - done
   *   + ret: "      abc     def    "
   * + step 2: regex detect multiple spacing, replace it by " " - done
   *   + ret: " abc def "
   * + step 3: regex detect spacing in the begin of string - done
   *   + ret: "abc def "
   * + step 4: regex detect spacing at the end of string
   *   + ret: "abc def"
   *
   *
   */
  const emptyString = "";
  const oneSpacing = " ";
  const regexAllDownLineSign = /\n+/g;
  const regexDetectMultipleSpacing = / +/g;
  const regexDetectSpacingInTheBeginning = /^ +/g;
  const regexDetectSpacingAtTheEnd = / +$/g;

  return s
    .replace(regexAllDownLineSign, emptyString)
    .replace(regexDetectMultipleSpacing, oneSpacing)
    .replace(regexDetectSpacingInTheBeginning, emptyString)
    .replace(regexDetectSpacingAtTheEnd, emptyString);
}

const s = `
  abc         def
`;

console.log(f(s));
