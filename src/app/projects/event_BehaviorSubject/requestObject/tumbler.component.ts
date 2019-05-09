import {Component, OnInit} from '@angular/core';
import {TumblerService} from '../tumbler.service';

@Component({
  selector: 'ev-request-tumbler',
  templateUrl: './tumbler.component.html',
  styleUrls: ['./tumbler.component.styl']
})
export class TumblerComponent implements OnInit {
  checked: boolean = true; // тублер темы

  constructor( private tumblerService: TumblerService ) {}

  ngOnInit() {
    const booleanTumbler = JSON.parse( localStorage.getItem('Theme') ); // Получим сохраненные настройки темы из локального хранилища
    this.checked = Boolean(booleanTumbler);
  }

  toggleTheme(): void {
    this.tumblerService.toggleTheme();
  }

}
