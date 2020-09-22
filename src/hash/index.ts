import { hashCode } from "./utils";

export class HashAsObject<T> {
  store: { [key: string]: T } = {}

  get(key: string): T | null {
    return this.store[hashCode(key)] || null;
  }

  set(key: string, value: T) {
    this.store[hashCode(key)] = value;
    console.log(this.store)
  }

  add(key: string, value: T) {
    if (this.store[hashCode(key)]) {
      throw new Error('Collision')
    }
    this.store[hashCode(key)] = value;
    console.log(this.store)
  }

  delete(key: string) {
    delete this.store[hashCode(key)];
  }

  dump(): T[] {
    return Object.values(this.store);
  }
}