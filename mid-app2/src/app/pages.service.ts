import { Injectable } from '@angular/core';


import { pages } from './mock-pages';
import { Observable, of } from 'rxjs';
import { PagesComponent } from './pages/pages.component';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }
  getProducts():  Observable<PagesComponent[]> {
    return of(pages);
  }
  
  getProduct(id: number): Observable<PagesComponent> {
   
    return of(pages.find(product => product.id === id));
  }

}


