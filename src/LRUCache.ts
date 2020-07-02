class CacheEntry {
  data: number
  useCount: number
  constructor(data: number, useCount: number) {
    this.data = data;
    this.useCount = useCount;
  }
}

class LRUCache {
  LRUMem = new Map();
  memMaxSize = 0;

  constructor(capacity: number) {
    this.memMaxSize = capacity;
  }

  get(key: number): number {
    if (this.LRUMem.has(key)) {
      const entry = this.LRUMem.get(key);
      entry.useCount = entry.useCount + 1;
      this.LRUMem.delete(key);
      this.LRUMem.set(key, entry);
      // console.log("delete: ", this.LRUMem)
      return entry.data;
    }
    return -1;
  }

  put(key: number, value: number): void {
    this.LRUMem.delete(key);
    if (this.LRUMem.size === this.memMaxSize) {
      // console.log("Max size: ", this.LRUMem, this.memMaxSize)
      let minUses = Number.MAX_SAFE_INTEGER;
      const mapIter = this.LRUMem.keys()
      let pointer = mapIter.next().value;
      let deleteKey = pointer
      // console.log("Evict: ", pointer)
      this.LRUMem.delete(pointer);
    }
    const entry = new CacheEntry(value, 0);
    this.LRUMem.set(key, entry);
    // console.log("Add an element: ", entry, this.LRUMem)
  }
}
