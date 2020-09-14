export function binarySearchRecursion<T extends string | number>(
   arr: T[], searchItem: T, low = 0, high = 0
): number | null {
  let lowPosition: number = low || 0;
  let highPosition: number = high || arr.length - 1;
  if (lowPosition <= highPosition) {
    let midPosition = Math.floor((lowPosition + highPosition) / 2);
    const goesItem = arr[midPosition];
    if (goesItem === searchItem) {
      const indexSearchElement = midPosition;
      return indexSearchElement;
    }
    if (searchItem < goesItem) {
      highPosition = midPosition - 1;
      return binarySearchRecursion(arr, searchItem, lowPosition, highPosition);
    }
    else {
      lowPosition = midPosition + 1;
      return binarySearchRecursion(arr, searchItem, lowPosition, highPosition);
    }
  }
  return null;
}