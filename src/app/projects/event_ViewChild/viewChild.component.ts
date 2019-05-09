import {Component, ViewChild} from '@angular/core';

/**
 * Шаблонные переменные, ViewChild
 * https://metanit.com/web/angular2/2.9.php
 * https://www.concretepage.com/angular-2/angular-2-viewchild-example
 * https://youtu.be/v7N2J88SP-s?list=PLxZpOFEb1t7Oo-t4fWt9UKKBOMSpIsWE1
 */
@Component({
  selector: 'ev-request-view-child',
  templateUrl: './viewChild.component.html',
  styleUrls: ['./viewChild.component.styl']
})
export class ViewChildComponent {

  @ViewChild('myInputText') inputText;
  constructor() {
    // setInterval( () => {
    //   console.log(this.inputText.nativeElement.value);
    // }, 2000 );
  }

  showValue() {
    console.log(this.inputText.nativeElement);
    console.log(this.inputText.nativeElement.value);
  }


}
