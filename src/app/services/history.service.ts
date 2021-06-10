import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

const baseUrl: string = 'http://localhost:8080/api/history';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getLatestHistory(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  getHistoryByDate(date: string): Observable<Product[]> {
    let url = baseUrl + '/' + date;
    return this.http.get<Product[]>(url);
  }

  createHistory(products: Product[]): Observable<Product[]>  {
    return this.http.post<Product[]>(baseUrl, products, httpOptions);
  }
}
