import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {BookDetailsComponent} from "./catalog/book-details/book-details.component";

const routes: Routes = [
    { path: 'home', component: CatalogComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'book-details', component: BookDetailsComponent },
    { path: '**', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
