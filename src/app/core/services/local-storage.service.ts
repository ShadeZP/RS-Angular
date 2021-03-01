import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string): string | null {
    const data: any = this.storage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  set(key: string, value: any) {
    const data: string = JSON.stringify(value);
    this.storage.setItem(key, data);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
