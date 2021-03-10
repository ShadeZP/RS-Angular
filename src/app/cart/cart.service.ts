import { Injectable } from '@angular/core';
import { Ibook } from '../modeles/book';
import { IcartItem, IcartData } from '../modeles/cart';

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
      this.increaseQuantity(id);
    } else {
      const cartItem: IcartItem = {
        name,
        id,
        price,
        totalPrice: price,
        quantity: 1,
      };
      this.cartData.cartItems = [...this.cartData.cartItems, cartItem];
      this.updateCartTotalPrice();
      this.updateCartTotalQuantity();
    }
  }

  increaseQuantity(id: number) {
    const existedBookIdx = this.findBookById(id);
    this.cartData.cartItems = this.cartData.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
    this.updateCartItemTotalPrice(this.cartData.cartItems[existedBookIdx]);
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }

  decreaseQuantity(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.cartData.cartItems = this.cartData.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
      return cartItem;
    });
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
