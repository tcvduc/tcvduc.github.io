/**
 *
 * @param {number} n
 */
function getNumberFirstDigit(n) {
  /**
   * Problem: Get Number First Digit
   * + n = 123
   *   + ret = 1
   * + n = 234
   *   + ret = 2
   * + n = 345
   *   + ret = 3
   *
   */
  let ret = 0;

  while (Math.floor(n) !== 0) {
    n = n / 10;

    if (Math.floor(n) !== 0) {
      ret = Math.floor(n);
    }
  }

  return ret;
}

/**
 *
 * @param {number} min
 * @param {number} max
 *
 */
function generateRandomNumber(min, max) {
  /**
   * Problem: Generate Random Number Between
   * min number and max number
   *
   * Understanding The Problem
   * + min: 0
   * + max: 8
   * + ret = {0,1,2,...,7,8}
   *
   * Approach
   * + rand =  Math.random() = (0,1)
   *   + rand = 0.1
   *   + rand = 0.2
   *   ..
   *   + rand = 0.9
   *
   * + delta1 = max - min
   *   + delta1 = 8 - 0
   *   + delta1 = 8
   *
   * + delta2 = delta1 x rand
   *   + 8 x 0.01 = 0.08 < 0.5 ~ 0
   *     + first digit: 0
   *   + 8 x 0.1 = 0.8 > 0.5 ~ 1
   *     + first digit: 0
   *   + 8 x 0.2 = 1.6 > 1.5 ~ 1
   *     + first digit: 1
   *   ..
   *   + 8 x 0.9 = 7.2 < 7.5 ~ 7
   *     + first digit: 7
   *   + 8 x 0.99 = 7.92 > 7.5 ~ 8
   *     + first digit: 7
   *
   * + delta3 = first digit + 0.5
   *   + delta3 = 7.5
   *
   * + ret =
   *   delta2 >= delta3 ?
   *    Math.floor(delta2) : Math.ceil(delta2)
   *
   *
   *
   * + step 0: write a function to get number
   * first digit
   * + step 1: declare rand variable = Math.random() - done
   * + step 2: min = min input - done
   * + step 3: max = max input - done
   * + step 4: delta1 = max - min - done
   * + step 5: delta2 = delta1 x rand - done
   * + step 5: get delta2 first digit, use step 0 - done
   * + step 6: delta3 = step 5 + 0.5 - done
   * + step 7: ret =
   *    delta2 >= delta3 ?
   *    Math.floor(delta2) :
   *    Math.ceil(delta2)
   *
   *
   *
   *
   */
  const random = Math.random();
  const delta1 = max - min;
  const delta2 = delta1 * random;
  const delta2FirstDigit = getNumberFirstDigit(delta2);
  const delta3 = delta2FirstDigit + 0.5;
  const ret = delta2 >= delta3 ? Math.ceil(delta2) : Math.floor(delta2);
  return ret;
}

/**
 *
 * @param {number} length
 */
function generateRandomString(length) {
  /**
   * Problem: generate random string
   * + length: 10
   * + ret = "abcdef1230"
   *
   * Understanding The Problem
   * + number string: "0123456789"
   * + character string: "abcdefghijklmnopqrstuvwxyz"
   *
   * Approach
   * + random character
   *   + random character in number string
   *   + random character in character string
   *
   * + traverse string = number string + character string
   *   + min index: 0
   *   + max index: traverse string length - 1
   *
   * + random string = traverseString[randomIndex]
   *   + randomIndex >= 0 && randomIndex <= max index
   *
   * + generate random number between min index and max index
   *   + ret = traverseString[randomNumber]
   *
   */
  const numberString = "0123456789";
  const characterString = "abcdefghijklmnopqrstuvwxyz";
  const traverseString = numberString + characterString;
  const minIndex = 0;
  const maxIndex = traverseString.length - 1;

  let ret = "";

  for (let i = length; i >= 1; --i) {
    const randomIndex = generateRandomNumber(minIndex, maxIndex);
    const randomCharacter = traverseString[randomIndex];
    ret += randomCharacter;
  }

  return ret;
}
