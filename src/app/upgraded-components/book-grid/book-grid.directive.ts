import { Directive, Injector, ElementRef } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'app-book-grid'
})
export class BookGridDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('bookGridComponent', elementRef, injector);
  }
}
