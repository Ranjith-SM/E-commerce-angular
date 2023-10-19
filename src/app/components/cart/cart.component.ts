import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userCarts: Product[] = []

  constructor(private cart: CartService) { }
  totalprice = 0;
  taxamount = 150;
  ngOnInit(): void {
    this.userCarts = this.cart.getcart();
    console.log(this.userCarts);

    
    for (let cartItem of this.userCarts) {
      this.totalprice = this.totalprice + cartItem.count! * parseFloat(cartItem.price);
    }


    // addQuantity(id:number) {
    //   this.cart.addCart(id);
    // }

    // delete(id:number) {
    //   this.userCarts= this.cart.deleteCart(id);
    // }


  }
}
