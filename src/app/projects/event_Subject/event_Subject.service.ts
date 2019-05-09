import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

/** передача события через подписку в RxJs/Observable
 * Получают только те кто успел подписатся.
 * @Info  https://weburoki.pro/angular-observable-and-subject
 * @Info  http://jasonwatmore.com/post/2018/06/25/angular-6-communicating-between-components-with-observable-subject
 * @Info  http://jasonwatmore.com/post/2019/02/07/angular-7-communicating-between-components-with-observable-subject
 **/
@Injectable()
export class EventSubjectService {
  private EventVoid = new Subject<any>();

  public setEvent(value: any): void {
    console.log('EVENT setEvent -> next ', value);
    this.EventVoid.next(value);
  }

  public clearEvent(): void {
    this.EventVoid.next();
  }

  public getEvent(): Observable<any> {
    console.log('EVENT getEvent  =  Подписка оформленна, теперь можете обмениватся данными между компонентами');
    // console.log('EVENT getEvent -> return ', this.EventVoid.asObservable() );
    return this.EventVoid.asObservable();
  }
}

