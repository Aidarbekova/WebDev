import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import {PagesComponent} from './pages/pages.component'


const routes: Routes = [];
{ path: 'books', component: booksComponent },
  {path: '', redirectTo: '/books', pathMatch: 'full' },
  
  { path: 'categoryId/:id', component: PagesListComponent},
  { path: 'pagesId/:id', component: PagesComponent},
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
