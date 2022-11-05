/**
 *
 * @param {string} s
 */
function advanceRegexTrim(s) {
  /**
   * + s = `
   *  abc     def
   * `
   * + ret = `  abc    def
   * `
   * + ret =`  abc    def   `
   * + ret =` abc def `
   * + ret = `abc def`
   *
   */
  const emptyString = "";
  const oneSpaceString = " ";
  const regexDownLine = /\n/g;
  const regexMultipleSpaces = / +/g;
  const regexLeftSpaces = /^ +/g;
  const regexRightSpaces = / +$/g;

  return s
    .replace(regexDownLine, emptyString)
    .replace(regexMultipleSpaces, oneSpaceString)
    .replace(regexLeftSpaces, emptyString)
    .replace(regexRightSpaces, emptyString);
}

const s = `
  abc     def   
`;
console.log(advanceRegexTrim(s));
