import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    const prod = PRODUCTS.find(p => p.id === id)!;
    return of(prod);
  }
}
