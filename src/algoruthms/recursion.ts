// factorial
export function sumTo(n: number): number {
    if (n < 2) {
        return n;
    } else {
        return n + sumTo(n - 1)
    }
}

// let obj = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

export function getSumValue(object: any, n = 0): number {
    let sum = n;
    if (object.value) {
        sum = sum + object.value
    }
    if (object.next) {
        return getSumValue(object.next, sum)
    } else return sum;
}