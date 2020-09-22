import { hashCode } from "./utils";

export class HashAsObject<T> {
  store: { [key: string]: T } = {}

  get(key: string): T | null {
    return this.store[hashCode(key)] || null;
  }

  set(key: string, value: T) {
    this.store[hashCode(key)] = value;
  }

  has(key: string): boolean {
    return Boolean(this.store[hashCode(key)]);
  }

  delete(key: string) {
    delete this.store[hashCode(key)];
  }

  dump(): T[] {
    return Object.values(this.store);
  }
}
//
// export function HashTable<T>(size: number) {
//   const _store: T[][] = [];
//   const _size = size;
//
//   function hash(string: string) {
//     let index = 0;
//     for(let i = 0; i < string.length; i++) {
//       index += string.charCodeAt(i) * i + 1;
//     }
//
//     return index % _size;
//   }
//
//   function findMatchIndex(list: any[][], key: string) {
//     for(let i = 0; i < list.length; i++) {
//       if(list[i][0] === key) return i;
//     }
//   }
//
//   return {
//     dump() {
//       console.dir(_store);
//     },
//     setElement(key: string, element: any){
//       if(!_store[hash(key)]) {
//         _store[hash(key)] = [
//           // @ts-ignore
//           [key, element]
//         ];
//       }
//       else {
//         const list = _store[hash(key)];
//         // @ts-ignore
//         const index = findMatchIndex(list, key);
//
//         if(index) {
//           // @ts-ignore
//           return list[index] = [key, element];
//         }
//         // @ts-ignore
//         list.push([key, element]);
//       }
//     },
//     getElement(key: string){
//       if(_store[hash(key)]) {
//         const list = _store[hash(key)];
//         // @ts-ignore
//         const index = findMatchIndex(list, key);
//         // @ts-ignore
//         if(index) return list[index][1]
//       }
//
//       return;
//     }
//   };
// }