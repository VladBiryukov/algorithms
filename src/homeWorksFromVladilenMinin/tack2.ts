// Задача 2
// Релизовать функцию, удаляющую элементы из массива
// Сделать это минимум 2мя способами
// Подсказка: используйте параметр arguments

// function destroyer(array, ...args) {
//   return array.filter(item => !args.includes(item))
// }

export function destroyer1<T extends string | number>(arr: T[], elements: T[]): T[] {
  return arr.filter(item => !elements.includes(item));
}

export function destroyer2<T extends string | number>(arr: T[], elements: T[]): T[] {
  return arr.reduce((acc, item) => {
    if (!elements.includes(item)){
      acc.push(item)
    }
    return acc;
  }, [] as T[]);
}

