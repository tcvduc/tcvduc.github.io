// Passwords must be between 16 and 30 characters - done
// and contain at least one upper case letter
// one lower case letter,
// one number and
// one special character (do not use @ * &).

/**
 *
 * @param {string} s
 */
function f(s) {
  const regex1 = /.{16,30}/g;
  const regex2 = /1/gi;
  const ret = regex1.test(s) && regex2.test(s);
  return ret;
}

/**
 *
 * @param {string} s
 *
 */
function getStringLength(s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    count++;
  }

  return count;
}

/**
 *
 * @param {string} s
 */
function wasSensitiveCase(s) {
  const regex = /[A-Z]{1}/gi;
  return regex.test(s);
}

const s = "12345678900987654321Duc";
// console.log(f(s));
// console.log(getStringLength(s));

const s2 = "s";
console.log(wasSensitiveCase(s2));
