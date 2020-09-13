export function getFactorialFromNumber(n: number): number {
    if (n < 2) {
        return n;
    } else {
        return n + getFactorialFromNumber(n - 1)
    }
}