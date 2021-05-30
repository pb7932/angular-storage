import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    const url = this.baseUrl + `/${id}`;
    return this.http.get<Product>(url);
  }

  getProductByName(name: string): Observable<Product[]> {
    const options = {params: new HttpParams().set('name', name)};
    return this.http.get<Product[]>(this.baseUrl, options);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + `/${product.id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  deleteProduct(id: number): Observable<unknown> {
    const url = this.baseUrl + `/${id}`;
    return this.http.delete(url, httpOptions);
  }

  deleteAllProducts(): Observable<unknown> {
    return this.http.delete(this.baseUrl, httpOptions);
  }

}
