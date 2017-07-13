import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

import { BookGridDirective } from './upgraded-components/book-grid/book-grid.directive'
import { BookGridElementDirective } from './upgraded-components/book-grid-element/book-grid-element.directive';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular;

angular
  .module('myApp')
  .directive(
    'appRoot',
    downgradeComponent({ component: AppComponent })
  );

@NgModule({
  declarations: [
    AppComponent,
    BookGridDirective,
    BookGridElementDirective
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}
