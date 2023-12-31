/**
 * Update unique items
 * @param {Map<String, Number>} groceries
 * @return {Map<String, Number>} groceries
 */
export default function updateUniqueItems(groceries) {
  if (groceries instanceof Map) {
    for (const [key, value] of groceries) {
      if (value === 1) {
        groceries.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return groceries;
}
