
class LvglMap<T>{
  private map: Map<string, T>;

  constructor() {
    this.map = new Map<string, T>();
  }

  insert(key: string, value: T) {
    if (this.map.has(key)) {
      console.warn(`Key ${key} already exists in the map.`);
    }
    this.map.set(key, value);
  }

  getValue(key: string): T | null {
    if (this.map.has(key)) {
      return this.map.get(key) || null;
    } else {
      // console.warn(`Key ${key} does not exist in the map.`);
      return null;
    }
  }

  has(key: string): boolean {
    return this.map.has(key);
  }

}

export default LvglMap;