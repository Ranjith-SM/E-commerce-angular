import { Component, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  error:string = "";
  constructor(private auth:AuthService, private route:Router) {

  }

onSubmit(loginForm:NgForm) {
  if(this.auth.validuser(loginForm.value)) { 
    this.route.navigate(['/'], {replaceUrl:true})
  }else {
    this.error="Invalid Credentials!!!";
  }
  
  

}

  // constructor(private renderer: Renderer2) { }

  // signUp: HTMLElement = document.getElementById("signUp") as HTMLElement;
  // signIn: HTMLElement = document.getElementById('signIn') as HTMLElement;
  // container: HTMLElement = document.getElementById('container') as HTMLElement;


  // ngOnInit() {
  //   this.renderer.listen(this.signUp, 'click', (event) => {
  //     this.container.classList.add('right-panel-active');
  //   });
  // }

  

  
}
