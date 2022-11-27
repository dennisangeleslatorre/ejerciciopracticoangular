import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private API_PRODUCTS = 'http://localhost:3000/products'

  constructor(private http:HttpClient) { }

  public getAllProducts() : Observable<any> {
    return this.http.get(this.API_PRODUCTS);
  }

  public sortProductsByIdAsc() : Observable<any> {
    return this.http.get(`${this.API_PRODUCTS}?_sort=_id&_order=asc`);
  }

  public sortProductsByIdDesc() : Observable<any> {
    return this.http.get(`${this.API_PRODUCTS}?_sort=_id&_order=desc`);
  }

  public sortProductsByNameAsc() : Observable<any> {
    return this.http.get(`${this.API_PRODUCTS}?_sort=name&_order=asc`);
  }

  public sortProductsByNameDesc() : Observable<any> {
    return this.http.get(`${this.API_PRODUCTS}?_sort=name&_order=desc`);
  }

  public sortProductsBySlugAsc() : Observable<any> {
    return this.http.get(`${this.API_PRODUCTS}?_sort=slug&_order=asc`);
  }

  public sortProductsBySlugDesc() : Observable<any> {
    return this.http.get(`${this.API_PRODUCTS}?_sort=slug&_order=desc`);
  }

}
