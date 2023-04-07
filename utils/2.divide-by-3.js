/**
 * Problem: Given a number 3, find
 * some numbers that can divide by 3
 *
 * - Example 1
 * + n = 3
 * + output = 6
 * + Explanation: because 6 % 3 = 0 so
 * output is 6
 *
 * - Example 2
 * + n = 3
 * + output = 12
 * + Explanation: because 12 % 3 = 0
 * so output is 12
 *
 */

function findListNumbersDivideBy3() {
  const n = 3;
  const result = [];

  for (let i = 1; i <= 10; ++i) {
    result.push(i * n);
  }

  return result;
}

const result = findListNumbersDivideBy3();
console.log(result);
