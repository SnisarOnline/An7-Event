import { Component } from '@angular/core';
import {EventSubjectService} from '../event_Subject.service';

@Component({
  selector: 'ev-request-button-subject',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.styl']
})
export class ButtonComponent {

  constructor(private eventSubject: EventSubjectService) {}

  sendMessage(value): void {
    // отправляем сообщения ко всем кто подписался через observable subject
    this.eventSubject.setEvent(value);
  }

  clearMessage(): void {
    // очищаем сообщения
    this.eventSubject.clearEvent();
  }

}
