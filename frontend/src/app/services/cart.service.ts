import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_URL = environment.API_URL;
  private cartItems: Array<any> = JSON.parse(localStorage.getItem('cart') || '[]');
  cartSummary: any = { sub_total: 0, tax: 0, discount: 0, total_amount: 0 }
  constructor(private http: HttpClient) { }
  getCartFromApi() {
    return this.http.get(this.API_URL + 'carts');
  }
  getCartItems() {
    return this.cartItems;
  }
  calculateTotalPrice(event: any, selectedItem: any) {
    let index = this.cartItems.findIndex(item => item.name == selectedItem.name);

    let totalPrice = this.cartItems[index]['price'] * this.cartItems[index]['quantity'];
    return totalPrice;
  }

  onAddToCartClick(selectedItem: any, quantity: number = 1) {

    //we make onAddToCartClick function with parameters event and selectedItem
    //maked a cartItems array where you can add items as much as needed
    //in cartItems we make a key 'cart' and using getItem to get the item 'cart' and store in the localstorage
    //then the JSON.parse converts JSON format string to objects.

    // let cartItems: Array<any> = [];
    let index = this.cartItems.findIndex(item => item.name == selectedItem.name);
    if (index == -1) {
      selectedItem.quantity = quantity;
      selectedItem.total_amount = quantity * selectedItem.price;

      this.cartItems.push(selectedItem);

    }

    else {
      this.cartItems[index]['quantity'] = this.cartItems[index]['quantity'] + quantity;
      this.cartItems[index]['total_amount'] = this.cartItems[index]['price'] * this.cartItems[index]['quantity'];

      // cartItems[index]['quantity'] +=  1;
      // cartItems[index]['quantity']++;
    }

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }


  onRemoveFromCartClick(selectedItem: any) {
    this.cartItems = this.cartItems.filter(item => item.name !== selectedItem.name);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    return this.cartItems;
  }

  calculateBillAmount() {
    this.cartSummary.sub_total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.cartSummary.sub_total += this.cartItems[i]['total_amount'];
    }
    this.cartSummary.tax = 0.14;
    this.cartSummary.total_amount = this.cartSummary.sub_total - this.cartSummary.sub_total * this.cartSummary.discount + this.cartSummary.sub_total * this.cartSummary.tax;
    return this.cartSummary.total_amount;
  }

}
