/*
  Проверить, если второй параметр является true для каждого элемента коллекции
  Если у всех элементов он truthy (проходит проверку в if), то функция возвращает true
  Иначе - false
  Найдите минимум 2 способа решения
*/

export function isEverythingTruthy1(arrayWithObject: Array<any>, key: string): boolean {
  let isEvery = true;
  arrayWithObject.forEach(item => {
    if (!item[key]) {
      isEvery = false;
    }
  })
  return isEvery;
}

export function isEverythingTruthy2(array: Array<any>, key: string): boolean {
  return array.every(item => item[key])
}
