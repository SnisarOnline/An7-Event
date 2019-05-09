import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {TumblerService} from '../tumbler.service';

const DARK_THEME_CLASS = 'DarkTheme';

@Component({
  selector: 'ev-result-tumbler',
  templateUrl: './tumbler-result.component.html',
  styleUrls: ['./tumbler-result.component.styl']
})
export class TumblerResultComponent implements OnInit, OnDestroy {

  topicStatus: boolean;

  constructor(
    private tumblerService: TumblerService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    /**
     *  subscription to changes in color scheme
     */
    this.tumblerService.isDarkTheme$
      .subscribe((isDarkTheme) => {
        if (isDarkTheme) {
          // this.renderer.addClass(document.body, DARK_THEME_CLASS);
          this.topicStatus = true;
        } else {
          // this.renderer.removeClass(document.body, DARK_THEME_CLASS);
          this.topicStatus = false;
        }
      });
  }

  ngOnDestroy() {
    this.tumblerService.isDarkTheme$.unsubscribe();
  }
}
