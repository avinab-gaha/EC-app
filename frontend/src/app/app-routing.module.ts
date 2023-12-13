import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserComponent } from './component/user/user.component';
import { CreateComponent } from './component/user/create/create.component';
import { DetailComponent } from './component/user/detail/detail.component';
import { EditComponent } from './component/user/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'mycart', component: ShoppingCartComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/create', component: CreateComponent },
  { path: 'users/edit/:id', component: EditComponent },
  { path: 'users/detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
