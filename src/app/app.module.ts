import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { FoouterMenuComponent } from './footer/foouter-menu/foouter-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FoouterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
