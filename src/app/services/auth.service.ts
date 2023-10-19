import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage:StorageService) { }

  validuser(user:User):boolean {
    let users = this.storage.getusers();
    let validuser:boolean = false ;
    for(let u of users) {
      if(u.email === user.email && u.password === user.password) {
        this.storage.setloggedUser(u);
        validuser=true;
        break;
      }
    }
  return validuser;
  }

  logoutUser() {
    this.storage.removeloggedUser();
  }

  isLoggedIn ():boolean {
    return this.storage.isUserLogged();
  }
  getloggedUser () : User {
    return this.storage.getloggedUser();
  }

}
