import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-commerce-angular';
  

  constructor(private user:StorageService,private auth:AuthService) {
  }

  ngOnInit(): void {
    this.user.loaduser();
    
  }
  islogged ():boolean {
    return this.auth.isLoggedIn();
  }
  
}
