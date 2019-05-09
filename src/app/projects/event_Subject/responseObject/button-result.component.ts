import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {EventSubjectService} from '../event_Subject.service';

@Component({
  selector: 'ev-result-button-subject',
  templateUrl: './button-result.component.html',
  styleUrls: ['./button-result.component.styl']
})
export class ButtonResultComponent implements OnDestroy {

  message: any;
  subscription: Subscription;

  constructor(private eventSubject: EventSubjectService) {
    // подписываемся на сообщения
    setTimeout(() => {
      this.subscription = this.eventSubject.getEvent().subscribe(message => {
          console.log('Component get.From.Subscribe = ', message);
          this.message  = JSON.stringify(message);
        });
    }, 5000);
  }

  ngOnDestroy(): void {
    // нужно отписаться чтобы не нагружать память
    this.subscription.unsubscribe();
  }

}
