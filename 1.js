/**
 *
 * @param {Array} a
 * @param {any} element
 */
function push(a, element) {
  /**
   * + a = [1,2,3,4,5]
   * + element = 6
   * + ret = [1,2,3,4,5,6]
   *
   */
  const ret = new Array(a.length + 1);

  for (let i = ret.length - 1 - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  ret[ret.length - 1] = element;

  return ret;
}

/**
 *
 * @param {Array} a
 */
function reverseArray(a) {
  /**
   * -------0 1 2
   * + a = [1,2,3]
   *
   * ---------0 1 2
   * + ret = [3,2,1]
   *
   * + ret[0] = a[2]
   * + ret[1] = a[1]
   * + ret[2] = a[0]
   *
   *
   * + i: length -> 0
   * + ret[i] = a[length - i - 1]
   */

  const length = a.length;
  const ret = new Array(length);

  for (let i = length - 1; i >= 0; --i) {
    ret[i] = a[length - i - 1];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function pop(a) {
  /**
   * -------0 1 2 3
   * + a = [1,2,3,4]
   * ---------0 1 2
   * + ret = [1,2,3]
   *
   */
  const ret = new Array(a.length - 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {string} factor
 */
function join(a, factor) {
  /**
   * + a = ['1','0']
   * + factor = '-'
   * + ret = "1-0"
   *
   */
  let ret = "";

  for (let i = 0; i <= a.length - 1; ++i) {
    if (i === a.length - 1) {
      ret += a[i];
      break;
    }

    ret += a[i] + factor;
  }

  return ret;
}

/**
 *
 * @param {string} pixel
 */
function getPixelNumber(pixel) {
  /**
   * --0123
   * + 10px
   * + length: 4
   * + traverse to 1:
   *   + 1 = 4 - 1 - 1 - 1
   *   + 1 = length - 1 - 1 -1
   * + ret: 10
   *
   */
  let ret = [];
  const length = pixel.length;

  for (let i = length - 1 - 1 - 1; i >= 0; --i) {
    ret = push(ret, pixel[i]);
  }

  ret = reverseArray(ret);

  ret = join(ret, "");

  return +ret;
}

const pixel = "12345px";

console.log(getPixelNumber(pixel)); // 10
