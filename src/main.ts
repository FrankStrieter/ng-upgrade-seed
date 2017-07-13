import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { UPGRADE_ADAPTER } from './app/upgrade-adapter'
import { UpgradeModule } from '@angular/upgrade/static';
import './app/angular1/app.js'
import './app/angular1/components/book-grid.component.js'
import './app/angular1/components/book-grid-element.component.js'
import { UpgradeAdapter } from '@angular/upgrade';

declare var angular: any;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
console.log('bootstrapping');
  // Bootstrap the application
  const adapter = new UpgradeAdapter(AppModule);

  const app = angular.module('myApp');

  app.directive('bookGridComponent',
  adapter.upgradeNg1Component('bookGridComponent'));

  app.directive('bookGridElementComponent',
  adapter.upgradeNg1Component('bookGridElementComponent'));

  adapter.bootstrap(document.body, ['myApp']);


});


