import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Product } from '../Models/product';
import { Cart } from '../Models/cart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  users: User[] = [{ id: 1, name: "Ranjith", email: "ranjith@kumaran.com", password: "ranjith36" }]

  loaduser() {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  }
  getusers() {
    return JSON.parse(localStorage.getItem("users") as string)
  }
  adduser(user: User): void {
    console.log(user);


    let userd = { id: this.users.length + 1, name: user.name, email: user.email, password: user.password };
    this.users.push(userd);
    localStorage.setItem("users", JSON.stringify(this.users));

    // if(localStorage.getItem("users")) {
    //   this.users= JSON.parse(localStorage.getItem("users") as string);
    //   this.users = this.users.map(())
    // }

  }

  setloggedUser(user: User): void {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  getloggedUser(): User {
    return JSON.parse(sessionStorage.getItem('user')!);
  }

  setCart(cart: Cart[]): void {    
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  getCart(): Cart[] {
    if (localStorage.getItem("cart") === null)  {
      return [];
    }

    return JSON.parse(localStorage.getItem("cart")!);
  }

  removeloggedUser() {
    sessionStorage.removeItem('user');
  }

  isUserLogged(): boolean {
    return sessionStorage.getItem("user") !== null;
  }

  addProducts(products: Product[]): void {
    localStorage.setItem("products", JSON.stringify(products))
  }

  cachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string)
  }
}
