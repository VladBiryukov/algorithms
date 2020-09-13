// Задача 1
// Реализовать функцию, которая находит разницу в массивах и возвращает ее
// Порядрк возвращаемых элментов не важен

// arrayDifference(['javascript', 'is', 'awesome'], ['javascript', 'awesome'])
// ['is']
// arrayDifference([1, 2, 3, 4, 5], [3, 4, 2, 7])
// [1, 5, 7]




export function arrayDifference1<T extends (string | number)>(arrA: T[], arrB: T[]): T[] {
    const biggestArr = arrA.length > arrB.length ? arrA : arrB;
    const result: T[] = [];

    for (let i = 0; i < biggestArr.length; i++) {
        const elementA: T | null = arrA[i] || null;
        const elementB: T | null = arrB[i] || null;
        if (elementA) {
            const hasElementAInArrB = arrB.includes(elementA);
            if (!hasElementAInArrB) {
                result.push(elementA);
            }
        }
        if (elementB) {
            const hasElementBInArrA = arrA.includes(elementB);
            if (!hasElementBInArrA){
                result.push(elementB)
            }
        }
    }

    return result
}

export function arrayDifference2<T extends (string | number)>(arrA: T[], arrB: T[]): T[] {
    const result: T[] = [];

    arrA.forEach(item => {
        const hasElementAInArrB = arrB.includes(item);
        if (!hasElementAInArrB){
            result.push(item);
        }
    })
    arrB.forEach(item => {
        const hasElementBInArrA = arrA.includes(item);
        if (!hasElementBInArrA){
            result.push(item)
        }
    })
    return result;
}
export function arrayDifference3<T extends (string | number)>(arrA: T[], arrB: T[]): T[] {
    return arrA.concat(arrB).filter(item => (!arrA.includes(item)) || (!arrB.includes(item)))
}