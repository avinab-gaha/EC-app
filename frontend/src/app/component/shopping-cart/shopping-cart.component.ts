import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartList: Array<any> = [];

  showFirstContainer = true;
  showSecondContainer = true;

  constructor(public cart: CartService, private router: Router) { }
  ngOnInit(): void {
    this.cartList = this.cart.getCartItems();
    this.cart.calculateBillAmount();

    if (this.cartList.length === 0) {
      this.showSecondContainer = false;
      this.showFirstContainer = true;
    }
    else {
      this.showFirstContainer = false;
      this.showSecondContainer = true;
    }
  }

  buy() {
    this.router.navigate(['/']);
  }

  onRemoveFromCartClick(event: any, selectedItem: any) {
    this.cartList = this.cart.onRemoveFromCartClick(selectedItem);
    this.cart.calculateBillAmount();
  }
  onQuantityChange(event: any, selectedItem: any, idx: number) {
    const newQuantity: number = event.target.value;
    //get old quantity
    const oldQuantity: number = selectedItem.quantity;
    localStorage.setItem('cartQuantity', newQuantity.toString());
    selectedItem.quantity = newQuantity;
    this.cartList[idx]['quantity'] = newQuantity;
    this.cartList[idx]['total_amount'] = newQuantity * selectedItem.price;
    this.cart.cartSummary.sub_total += (newQuantity - oldQuantity) * selectedItem.price;
    this.cart.calculateBillAmount();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

}
