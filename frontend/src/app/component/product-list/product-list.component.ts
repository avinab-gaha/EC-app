import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productData: any;
  countData!: number;
  imagePrev: any = "";
  constructor(private product: ProductService, private router: Router, private cartService: CartService) { }

  //initialize
  ngOnInit(): void {
    this.showApiData();
  }

  showApiData() {
    this.product.getDataFromApi().subscribe((res: any) => {
      this.productData = res.data;
      this.countData = Array.isArray(res.data) ? res.data.length : 0;
    });
  }

  addToCart(selectedItem: any, quantity: number) {
    this.cartService.onAddToCartClick(selectedItem, quantity);
  }

  onRemoveFromCartClick(selectedItem: any) {
    this.cartService.onRemoveFromCartClick(selectedItem);
  }
}
