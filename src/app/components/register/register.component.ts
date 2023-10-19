import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  error: string = "";
  constructor(private storage: StorageService, private route: Router) { }


  onSubmit(registerForm: NgForm) {
    console.log(registerForm.value.password);


    let users = this.storage.getusers();
    
    let userhasAccount = users.filter((u: { email: any; })=> u.email === registerForm.value.email);
    console.log(userhasAccount.length);
    
      if (userhasAccount.length) {
        this.error = "This email is already used!!!";
      } else {
        this.storage.adduser(registerForm.value);
        this.route.navigate(['login'], { replaceUrl: true })


      }
    

  }

}
