import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  /**
   * Get object from localStorage
   * @param {string} key Saved key in localStorage
   * @returns {any} value Get value from localStorage
   */
  get(key: string): any {
    try {
      return  JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Save value in localStorage
   * @param {string} key  Save key to localStorage
   * @param {any} data  Save value in localStorage
   */
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Remove from localStorage
   * @param {string} key Key-name to remove
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }

}
