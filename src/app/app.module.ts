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

}
