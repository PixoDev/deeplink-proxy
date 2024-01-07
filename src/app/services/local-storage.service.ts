export class LocalStorageService {
  private static _instance: LocalStorageService | null = null;
  static get instance() {
    if (!this._instance) {
      this._instance = new LocalStorageService();
    }
    return this._instance;
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getArray<T>(key: string): T[] | null {
    const data = this.get(key);
    if (data) {
      return JSON.parse(data) as T[];
    }
    return null;
  }

  getObject<T>(key: string): T | null {
    const data = this.get(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return null;
  }

  getBoolean(key: string): boolean | null {
    const data = this.get(key);
    if (data) {
      return JSON.parse(data) as boolean;
    }
    return null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
