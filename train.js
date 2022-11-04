/**
 *
 * @param {Array} items
 * @param {number} limit
 *
 */
function calculateTotalPageButton(items, limit) {
  /**
   *
   * -- ----------------
   * -- case 1
   * -- ----------------
   * ----------0 1 2 3 4 5 6 7
   * + items: [1,2,3,4,5,6,7,8]
   *
   * + i = 7
   *   + countTraverse: 0
   * + i = 6
   *   + countTraverse: 1
   * + i = 5
   *   + countTraverse: 2
   * + i = 4
   *   + countTraverse: 3
   * + i = 3
   *   + countTraverse: 4
   * + i = 2
   *   + countTraverse: 5
   * + i = 1
   *   + countTraverse: 6
   * + i = 0
   *   + countTraverse: 7
   *
   * -- ----------------
   * -- case 2
   * -- ----------------
   *
   * ----------0 1 2 3 4 5 6 7 8 9  10 11 12 13
   * + items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
   * + limit: 8
   * + ret: 2
   *   + page 1: 0 -> 0 + limit - 1
   *     + page 1: 0 -> 0 + 8 - 1
   *     + page 1: 0 -> 7
   *   + page 2: 8 -> 8 + limit - 1
   *     + page 2: 8 -> 8 + 8 - 1
   *     + page 2: 8 -> 15
   *       + max offset: 13
   *     + page 2: 8 -> 13
   *
   * + i: 0 -> 7
   *   + ret: 1
   * + i: 8 -> 15
   *   + ret: 2
   *   + limit: 8
   *     + ret: 1
   *     + ret: 2
   *   + countTraverse: 0 -> 8: 1
   *   + countTraverse: 0 -> 8: 2
   *
   * + i: 8 -> 13
   *   + ret: 1
   *   + limit: 8
   *     + ret: 1
   *     + expected ret: 2
   *   + countTraverse: 0 -> 8: 1
   *   + countTraverse: 0 -> 13 - | > 0
   *
   *
   *
   *
   * -- ----------------
   * -- case 3: done
   * -- ----------------
   *
   *
   * ----------0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15
   * + items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
   * + item length: 16
   * + limit: 8
   * + ret: 2
   *   + page 1: 0 -> 0 + limit - 1
   *     + page 1: 0 -> 0 + 8 - 1
   *     + page 1: 0 -> 7
   *   + page 2: 8 -> 8 + limit - 1
   *     + page 2: 8 -> 8 + 8 - 1
   *     + page 2: 8 -> 15
   *       + max offset: 15
   *     + page 2: 8 -> 15
   *
   *
   */
  let countTraverse = 0;
  let totalPage = 0;

  for (let i = items.length - 1; i >= 0; --i) {
    countTraverse++;

    if (countTraverse === limit) {
      totalPage++;
      countTraverse = 0;
    }
  }

  if (countTraverse > 0) {
    totalPage++;
  }

  return totalPage;
}

/**
 * Case 1: done
 * ----------0 1 2 3 4 5 6 7
 * + items: [1,2,3,4,5,6,7,8]
 * + page 1 offset: 0 -> 7
 * + limit: 8
 * -> Expected ret: 1
 *
 *
 * Case 2: done
 * ----------0 1 2 3 4 5 6 7 8 9  10 11 12 13
 * + items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
 * + page 1 offset: 0 -> 7
 * + page 2 offset: 8 -> 15
 *   + max offset: 13
 *   + page 2 offset ret: 8 -> 13
 *
 *
 *
 * Case 3: done
 *
 *
 */

function case1() {
  // ------------0  1  2  3  4  5  6  7
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const limit = 8;
  console.log(calculateTotalPageButton(items, limit));
}

function case2() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const limit = 8;
  console.log(calculateTotalPageButton(items, limit));
}

function case3() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const limit = 8;
  console.log(calculateTotalPageButton(items, limit));
}

function case4() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const limit = 8;
  console.log(calculateTotalPageButton(items, limit));
}

/**
 *
 * @param {number} length
 */
function generateItems(length) {
  const ret = [];
  for (let i = length; i >= 1; --i) {
    ret.push(length - i + 1);
  }
  return ret;
}

{
  //   case1(); // 1
  //   case2(); // 2
  //   case3(); // 2

  const items1 = generateItems(5); // 1
  const items2 = generateItems(8); // 1
  const items3 = generateItems(14); // 2
  const items4 = generateItems(16); // 2
  const items5 = generateItems(17); // 3

  const limit = 8;

  console.log(calculateTotalPageButton(items1, limit));
  console.log(calculateTotalPageButton(items2, limit));
  console.log(calculateTotalPageButton(items3, limit));
  console.log(calculateTotalPageButton(items4, limit));
  console.log(calculateTotalPageButton(items5, limit));
}
