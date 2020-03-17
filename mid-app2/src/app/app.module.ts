import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksComponent } from './books/books.component';
import { FormsModule }    from '@angular/forms';

import { PagesComponent } from './pages/pages.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PagesListComponent } from './pages-list/pages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    PagesComponent,
    TopBarComponent,
    PagesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
