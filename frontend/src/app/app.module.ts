import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { NavComponent } from './component/nav/nav.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserComponent } from './component/user/user.component';
import { EditComponent } from './component/user/edit/edit.component';
import { DetailComponent } from './component/user/detail/detail.component';
import { CreateComponent } from './component/user/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ShoppingCartComponent,
    NavComponent,
    LoginComponent,
    CheckoutComponent,
    AdminDashboardComponent,
    UserComponent,
    EditComponent,
    DetailComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
