import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

/** передача события через подписку в RxJs/Observable
 * @Info  https://weburoki.pro/angular-observable-and-subject
 * @Info  http://jasonwatmore.com/post/2018/06/25/angular-6-communicating-between-components-with-observable-subject
 **/
@Injectable()
export class EventService {
  private EventVoid = new Subject<any>();

  public setEvent(value: any): void {
    // console.log('EVENT setOption -> next ', value);
    this.EventVoid.next(value);
  }

  public clearEvent(): void {
    this.EventVoid.next();
  }

  public getEvent(): Observable<any> {
    // console.log('EVENT getOption -> return ', this.EventVoid.asObservable() );
    return this.EventVoid.asObservable();
  }
}

