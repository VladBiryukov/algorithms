export const objForRecursion = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

export function getSumValue(object: any, n = 0): number {
  let sum = object?.value ? (n + object.value) : n;
  if (object.next) {
    return getSumValue(object.next, sum)
  } else return sum;
}

export function getSumNumberFromArray(array: number[], result = 0): number {
  if (array.length) {
    const copyArr = array.concat();
    const firstElement = copyArr.shift() as number;
    return result + getSumNumberFromArray(copyArr, firstElement);
  }
  return result;
}

export function getLengthArray<T>(array: T[], length = 0): number {
  if (array.length) {
    const copyArr = array.concat();
    copyArr.shift();
    return 1 + getLengthArray(copyArr)
  }
  return length;
}

export function getBiggestNumberFromArray(array: number[], prev = 0): number {
  if (array.length) {
    const copyArr = array.concat();
    const firstElement = array[0];
    copyArr.shift();
    const currentBiggest: number = prev > firstElement ? prev : firstElement;
    return getBiggestNumberFromArray(copyArr, currentBiggest)
  }
  return prev;
}
