import { IcartData } from './../modeles/book';
import { Injectable } from '@angular/core';
import { Ibook, IcartItem } from '../modeles/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData: IcartData = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
  constructor() {}

  updateCartTotalPrice() {
    this.cartData.totalPrice = this.cartData.cartItems.reduce(
      (a, b) => a + b.totalPrice,
      0
    );
  }

  updateCartTotalQuantity() {
    this.cartData.totalQuantity = this.cartData.cartItems.reduce(
      (a, b) => a + b.quantity,
      0
    );
  }

  updateCartItemTotalPrice(item: IcartItem) {
    item.totalPrice = item.price * item.quantity;
  }

  getList() {
    return this.cartData;
  }

  findBookById(id: number) {
    const idx = this.cartData.cartItems.findIndex((item) => {
      return item.id === id;
    });
    return idx;
  }

  buyBook(book: Ibook) {
    const { name, id, price } = book;
    const existedBookIdx = this.findBookById(id);
    if (existedBookIdx !== -1) {
      this.cartData.cartItems[existedBookIdx] = {
        ...this.cartData.cartItems[existedBookIdx],
        quantity: this.cartData.cartItems[existedBookIdx].quantity + 1,
      };
      this.updateCartItemTotalPrice(this.cartData.cartItems[existedBookIdx]);
    } else {
      const cartItem: IcartItem = {
        name,
        id,
        price,
        totalPrice: price,
        quantity: 1,
      };
      this.cartData.cartItems = [...this.cartData.cartItems, cartItem];
    }
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }

  increaseQuantity(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.cartData.cartItems[existedBookIdx] = {
      ...this.cartData.cartItems[existedBookIdx],
      quantity: this.cartData.cartItems[existedBookIdx].quantity + 1,
    };
    this.updateCartItemTotalPrice(this.cartData.cartItems[existedBookIdx]);
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }

  decreaseQuantity(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.cartData.cartItems[existedBookIdx] = {
      ...this.cartData.cartItems[existedBookIdx],
      quantity: this.cartData.cartItems[existedBookIdx].quantity - 1,
    };
    this.updateCartItemTotalPrice(this.cartData.cartItems[existedBookIdx]);
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }

  removeBook(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.cartData.cartItems.splice(existedBookIdx, 1);
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }
}
