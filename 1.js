/**
*
* @param {number} min
* @param {number} max

*/
function randomNumber(min, max) {
  /**
   * - min: 0
   * - max: 5
   * - ret: 0 -> 5
   *
   */
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randomNumber(0, 5));
console.log(randomNumber(0, 5));
console.log(randomNumber(0, 5));
console.log(randomNumber(0, 5));
console.log(randomNumber(0, 5));
