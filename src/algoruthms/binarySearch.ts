export function binarySearch(arr: number[], searchItem: number): number | null {
    let lowPosition: number = 0;
    let highPosition: number = (arr.length - 1);

    while (lowPosition <= highPosition) {
        let midPosition = Math.floor((lowPosition + highPosition) / 2);
        const goesItem = arr[midPosition];
        if (goesItem === searchItem) {
            const resultIndex = midPosition;
            return resultIndex;
        }
        if (searchItem < goesItem) {
            highPosition = midPosition - 1;
        }
        else {
            lowPosition = midPosition + 1;
        }
    }
    return null
}