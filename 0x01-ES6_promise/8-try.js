/**
 * @param {Number} numerator
 * @param {Number} denominator
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  try {
    return numerator / denominator;
  } catch (error) {
    return error;
  }
}

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));