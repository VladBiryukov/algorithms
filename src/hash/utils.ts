export function hashCode(key: string): string {
  let hash = 0;
  let char: number;
  if (key.length === 0) {
    return hash.toString();
  }
  for (let i = 0; i < key.length; i++) {
    char = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}