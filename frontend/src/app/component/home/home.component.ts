import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: any = [];
  constructor(private product: ProductService, public cart: CartService) { }

  ngOnInit(): void {
    this.product.getDataFromApi().subscribe((res: any) => {
      this.productList = res.data;
    })
  }

  // onAddToCartClick(selectedItem: any, quantity: number) {
  //   return this.cart.onAddToCartClick(selectedItem, quantity);
  // }

}
