import {EventEmitter, Injectable} from '@angular/core';

/** Передача события "EventEmitter"
 * @Info https://stackoverflow.com/questions/40238549/angular-2-event-emitters-vs-subject
 * @Info http://next.plnkr.co/edit/wzN7ZKU1CmVwbtxw8XFJ?p=preview&utm_source=legacy&utm_medium=worker&utm_campaign=next&preview
 */
@Injectable()
export class EventEmitterService  {

  navchange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  /**
   * Извещаем всех
   * @param object
   */
  emitNavChangeEvent(object) {
    this.navchange.emit(object);
  }

  /**
   * Подписываемся
   * @returns {EventEmitter<any>}
   */
  getNavChangeEmitter() {
    return this.navchange;
  }
}
