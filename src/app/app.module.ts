import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static'
//import { BookGridComponent, BookGridElementComponent } from 'app/upgrade-adapter';





@NgModule({
  declarations: [
    AppComponent,
    // BookGridComponent,
    // BookGridElementComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 constructor(private upgrade: UpgradeModule) { }

 ngDoBootstrap() {
   this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
 }
}
