import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData: any;
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.productData = [
      {
        "name": 'Go Pro',
        "price": 50000,
      },
      {
        "name": 'Iphone pro',
        "price": 100000,
      }
    ]
  }

  getDataFromApi() {
    return this.http.get(this.API_URL + 'products');
  }

  changeDataInApi(data: any) {
    return this.http.post(this.API_URL + 'admin', data);
  }
}

