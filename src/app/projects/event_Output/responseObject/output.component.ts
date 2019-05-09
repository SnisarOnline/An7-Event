import { Component } from '@angular/core';

/**
 * Передача данных между компонентами через "Output"
 * @Info https://metanit.com/web/angular2/2.10.php
 * @Info https://netbasal.com/event-emitters-in-angular-13e84ee8d28c
 */
@Component({
  selector: 'ev-response-output',
  templateUrl: './output.component.html'
})
export class ResponseOutputComponent {

  text: boolean = true;

  constructor() { }

  initEventFunction(event: Event) {
    console.info( '- Родительский получил от = ', event );
    this.text = !this.text ;
  }

}
