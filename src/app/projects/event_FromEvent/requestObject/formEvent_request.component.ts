import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';

/**
 * fromEvent - указываем ХТМЛ елемент на который вешаем прослушку события.
 */
@Component({
  selector: 'ev-request-fromEvent',
  templateUrl: './formEvent_request.component.html',
  styleUrls: ['./formEvent_request.component.styl']
})
export class FormEventRequestComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('input') button: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log(res));

  }
}
