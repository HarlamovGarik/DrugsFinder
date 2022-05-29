import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { FoouterMenuComponent } from './footer/foouter-menu/foouter-menu.component';
import { MainContentMenuComponent } from './main-content/main-content-menu/main-content-menu.component';
import { GridItemsComponent } from './main-content/grid-items/grid-items.component';
import { ItemComponentComponent } from './main-content/item-component/item-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemPopupComponent } from './main-content/item-popup/item-popup.component';
import { GridItemsPopupComponent } from './main-content/grid-items-popup/grid-items-popup.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FoouterMenuComponent,
    MainContentMenuComponent,
    GridItemsComponent,
    ItemComponentComponent,
    HomeComponent,
    CatalogComponent,
    ItemPopupComponent,
    GridItemsPopupComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
