import {Component, Directive, HostListener} from '@angular/core';

/**
 * @info https://angular.io/api/core/HostListener
 * @info https://metanit.com/web/angular2/3.3.php
 */
@Directive({ selector: '[directiveHostListener]' })
export class DirectiveHostListenerCountClicks {

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, ' of clicks:');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }
}

@Component({
  selector: 'ev-directive-hostListener',
  template: '<button directiveHostListener>directive-hostListener in console</button>',
})
export class HostListenerComponent {}
