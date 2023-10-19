import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private product: ProductService, private storage:StorageService , private cart:CartService, private auth: AuthService) { }

  ngOnInit(): void {
    this.product.loadproduct().subscribe(
      {
        next: (data: Product[]) => {
          this.products = data;
          this.storage.addProducts(this.products);
        },
        complete: () => {
          console.log("done");
        },
        error: (error: Error) => {
          console.log('name :', error.name);
          console.log('Message :', error.message);
        }
      })
    
  }

  addtoCart(id:number) {
    this.cart.addCart(id);
  }

  islogged():boolean {
    return this.auth.isLoggedIn();
  } 

}

  
