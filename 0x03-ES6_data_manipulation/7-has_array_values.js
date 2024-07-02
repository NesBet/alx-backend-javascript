/**
 * Checks if a set contains each element in an array.
 *
 * @returns a boolean.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
