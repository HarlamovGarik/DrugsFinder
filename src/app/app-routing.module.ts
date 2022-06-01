import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CatalogComponent} from "./catalog/catalog.component";
import {HomeComponent} from "./home/home/home.component";
import {SearchComponent} from "./search/search.component"

const routes: Routes = [
  {path: 'Catalog/:id', component: CatalogComponent},
  {path: '', component: HomeComponent},
  {path: 'search/:find', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
