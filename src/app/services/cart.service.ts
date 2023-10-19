import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { StorageService } from './storage.service';
import { Cart } from '../Models/cart';
import { User } from '../Models/user';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];
  constructor(private storage: StorageService, private auth: AuthService, private product: ProductService) { }

  addcount(): number {
    let cart: Cart[] = this.storage.getCart();
    let loggeduser: User = this.auth.getloggedUser();
    let product: Product[] = this.storage.cachedProducts();
 
    let userCart: Cart | undefined = cart.find((c) => c.user.id === loggeduser.id);

    
    let count: number = 0;

    if (userCart) {
      for (let product of userCart.cartProduct) {
        if (product.count) count += product.count;
      }
    }
    return count;
  }

  addCart(id: number) {
    let cart: Cart[] = this.storage.getCart();
    let loggeduser: User = this.auth.getloggedUser();
    let products: Product[] = this.product.getProducts();

    let product: Product | undefined = products.find((p) => p.id === id);
    
    
    if (product) {
      let userCart: Cart | undefined = cart.find((c) => c.user.id === loggeduser.id);
      
      if (!userCart) {
        let newCart: Cart = { user: loggeduser, cartProduct: [{ ...product, count: 1 }] };
        cart.push(newCart);
        this.storage.setCart(cart);
      } else {
        const cartProduct = userCart.cartProduct.find((uc) => uc.id === id);
        console.log(cartProduct);
        
        if (cartProduct) {
          let newCart = userCart.cartProduct.map((cart) => {
            if (cart.id === id) {
              return { ...cart, count: cart.count! + 1 };
            } else {
              return cart;
            }
          });
          userCart.cartProduct = newCart;
        } else {
          userCart.cartProduct.push({ ...product, count: 1  });
        }
        let updatedCart: Cart[] = cart.filter((uc) => uc.user.id !== loggeduser.id)

        updatedCart.push(userCart);
        this.storage.setCart(updatedCart);
        
      }
    }
  }

  getcart():Product[] {
    let loggeduser:User = this.storage.getloggedUser();
    let cart: Cart[]=this.storage.getCart();

    let userCart:Product[] | undefined = cart.find((uc) => uc.user.id === loggeduser.id)?.cartProduct;
    
    if(!userCart) return [];
    return userCart;

  }

  // deleteCart(id:number):Product[] {
  //   let loggeduser:User = this.storage.getloggedUser();
  //   const cart:Cart[] = this.storage.getCart();
  //   let userCart: Product[] | undefined = cart.find((c) => c.user.id === loggeduser.id)?.cartProduct!;
  //   const updatedcart:Product[] = userCart.filter((cart) => cart.id !== id)!;
  //   localStorage.setItem("cart", JSON.stringify(updatedcart));

  //   return updatedcart;

    
  // }


}

