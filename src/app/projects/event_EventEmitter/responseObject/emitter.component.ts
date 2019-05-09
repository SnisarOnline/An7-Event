import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventEmitterService} from '../eve.service';

/**
 * Получим данные через сервис EventEmitter
 */
@Component({
  selector: 'ev-response-eventEmitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.styl']
})
export class ResponseEventEmitterComponent implements OnInit, OnDestroy {
  item: any;
  subscription: any;

  constructor(private navService: EventEmitterService) {}

  ngOnInit() {
    this.navService.emitNavChangeEvent(1);
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectedNavItem(item) {
    console.log('get nav item ' + item);
    this.item = JSON.stringify(item);
  }

}
