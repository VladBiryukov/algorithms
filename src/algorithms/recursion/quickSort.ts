export function quickSort<T extends number | string>(arr: T[]): T[] {
  if (arr.length < 2) {
    return arr;
  } else {
    const copyArray = arr.concat();
    const midPosition = Math.floor((arr.length - 1) / 2) ;
    const mainValue = arr[midPosition];

    copyArray.splice(midPosition, 1);
    const arrayWithSmallestValues: T[] = copyArray.filter(value => value <= mainValue);
    const arrayWithBiggestValues: T[] = copyArray.filter(value => value > mainValue);

    return [...quickSort(arrayWithSmallestValues), mainValue, ...quickSort(arrayWithBiggestValues)];
  }
}
