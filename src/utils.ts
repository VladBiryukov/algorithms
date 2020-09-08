export function getIndexSmallest<T>(arr: T[]): number {
    let smallest = arr[0];
    let indexSmallest = 0;
    arr.forEach((item, index) => {
        if (item < smallest){
            smallest = item;
            indexSmallest = index;
            return;
        }
    })
    return indexSmallest;
}
// no nested
export function getIndexBigLest<T>(arr: T[]): number {
    let smallest = arr[0];
    let indexSmallest = 0;
    arr.forEach((item, index) => {
        if (item > smallest){
            smallest = item;
            indexSmallest = index;
            return;
        }
    })
    return indexSmallest;
}

