/**
 * @param {Number} numerator
 * @param {Number} denominator
 */
export default function divideFunction(numerator, denominator) {
  try {
    return numerator / denominator;
  } catch (error) {
    return error;
  }
}
