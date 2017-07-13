import { Directive, Injector, ElementRef } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: '[appBookGridElement]'
})
export class BookGridElementDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('bookGridElementComponent', elementRef, injector);
  }
}
