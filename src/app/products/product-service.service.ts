import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = PRODUCTS;

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.filter((p) => {p.id == id;})[0];
  }
}
