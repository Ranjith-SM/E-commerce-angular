import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userCarts: Product[] = []

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.userCarts = this.cart.getcart();
    console.log(this.userCarts);
  }

}
