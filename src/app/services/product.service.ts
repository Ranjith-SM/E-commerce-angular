import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private storage:StorageService) { }
  loadproduct():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products")
  }

  saveProduct(products:Product[]) {
    this.storage.addProducts(products);
  }

  getProducts():Product[] {
    return this.storage.cachedProducts();
  }

}
