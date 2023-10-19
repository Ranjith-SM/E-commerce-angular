import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auths:AuthService, private route:Router, private cart:CartService) {}

  logout() {
    this.auths.logoutUser();
    this.route.navigate(['login'], {replaceUrl:true});
  }

  getcount():number {
    let count = this.cart.addcount();
    return count > 0 ? count : 0;
  }

}
