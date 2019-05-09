import {Component} from '@angular/core';
import {EventEmitterService} from '../eve.service';

/**
 * Отправим данные через сервис EventEmitter
 */
@Component({
  selector: 'ev-request-eventEmitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.styl']
})
export class RequestEventEmitterComponent {

  constructor(private navService: EventEmitterService) {}

  selectedNavItem(item) {
    console.log('send nav item ' + item);
    this.navService.emitNavChangeEvent(item);
  }

}
