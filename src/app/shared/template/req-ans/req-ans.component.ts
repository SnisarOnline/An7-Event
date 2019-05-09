import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-req-ans',
  templateUrl: './req-ans.component.html',
  styleUrls: ['./req-ans.component.styl']
})
export class ReqAnsComponent {
// входящие (Название входящей переменной) Название переменной для етого компонента: Типизируем данные
  @Input('title') title: string;

  constructor() { }

}
