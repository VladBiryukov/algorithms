import { getIndexSmallest } from "../utils";

export function sortSelect<T extends number | string>(arr: T[]): T[] {
    let copyArray: T[] = [...arr];
    const newArray: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        const indexSmallest = getIndexSmallest<T>(copyArray);
        const itemSmallest = copyArray[indexSmallest];
        newArray.push(itemSmallest);
        copyArray.splice(indexSmallest, 1);
    }
    return newArray;
}