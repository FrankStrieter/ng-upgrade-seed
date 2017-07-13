import { Directive, Injector, ElementRef, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'app-book-grid-element'
})
export class BookGridElementDirective extends UpgradeComponent {
  @Input() book;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('bookGridElementComponent', elementRef, injector);
  }
}
