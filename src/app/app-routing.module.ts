import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CatalogComponent} from "./catalog/catalog.component";
import {HomeComponent} from "./home/home/home.component";

const routes: Routes = [
  {path: 'Catalog/:id', component: CatalogComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
