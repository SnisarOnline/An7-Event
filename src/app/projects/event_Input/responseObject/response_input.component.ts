import {Component, Input, OnInit} from '@angular/core';

/** Передача события через input
 * @Info https://youtu.be/JQtUpUqkXms?list=PLxZpOFEb1t7Oo-t4fWt9UKKBOMSpIsWE1
 */
@Component({
  selector: 'ev-response-input',
  templateUrl: './response_input.component.html',
  styleUrls: ['./response_input.component.styl']
})
export class ResponseInputComponent implements OnInit {

  @Input('InputParentValue') InputValue;

  constructor() {}

  ngOnInit() {}

}
