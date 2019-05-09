import {Component, HostListener} from '@angular/core';

/** Передача события через input
 * @Info https://youtu.be/JQtUpUqkXms?list=PLxZpOFEb1t7Oo-t4fWt9UKKBOMSpIsWE1
 */
@Component({
  selector: 'ev-request-input',
  templateUrl: './request_input.component.html',
  styleUrls: ['./request_input.component.styl']
})
/**
 * @info https://metanit.com/web/angular2/3.3.php
 */
export class RequestInputComponent {

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      console.log( 'HostListener[document:keydown] = ', event );
    }
  }

  teeex: string;

  constructor() {}

  func(event) {
    console.log( '(keyup.enter) = ', event );
  }
}
