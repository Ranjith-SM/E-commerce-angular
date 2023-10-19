import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"cart", component:CartComponent , canActivate:[authGuard]} ,
  {path:"orders", component:OrdersComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
