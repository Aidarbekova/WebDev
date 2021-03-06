import { Injectable } from '@angular/core';
import{Product} from  './products';

import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():  Observable<Product[]> {
    return of(PRODUCTS);
  }
  
  getProduct(id: number): Observable<Product> {
   
    return of(PRODUCTS.find(product => product.id === id));
  }

}



