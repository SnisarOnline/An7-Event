import {Component, Output, EventEmitter} from '@angular/core';

/**
 * Передача данных между компонентами через "Output"
 * @Info https://metanit.com/web/angular2/2.10.php
 * @Info https://netbasal.com/event-emitters-in-angular-13e84ee8d28c
 */
@Component({
  selector: 'ev-request-out-comp',
  templateUrl: './output.component.html'
})
export class RequestOutputComponent {

  // событие которое будет переданно родительскому компоненту // всплытие события
  // а в родительском НТМЛ, нужно повесить обработчик
  // (onChanged)="onChanged($event)"
  // <ev-request-output (onChanged)="initEventFunction($event)" ></ev-request-output>
  @Output() onChanged = new EventEmitter<any>(); // передача выше

  constructor() { }

  change(increased: any) {
    this.onChanged.emit(increased); // запуск события
  }

}
