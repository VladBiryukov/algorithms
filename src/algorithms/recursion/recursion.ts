
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

