import { ICartData } from './../modeles/book';
import { Injectable } from '@angular/core';
import { IBook, ICartItem } from '../modeles/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData: ICartData = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
  constructor() {}

  updateCartTotalPrice(): void {
    this.cartData.totalPrice = this.cartData.cartItems.reduce(
      (a, b) => a + b.totalPrice,
      0
    );
  }

  updateCartTotalQuantity(): void {
    this.cartData.totalQuantity = this.cartData.cartItems.reduce(
      (a, b) => a + b.quantity,
      0
    );
  }

  updateCartItemTotalPrice(item: ICartItem): void {
    item.totalPrice = item.price * item.quantity;
  }

  changeQuantity(operand: string, id: number): void {
    this.cartData.cartItems = this.cartData.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        if (operand === 'incr') {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else if (operand === 'decr') {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
      }
      return cartItem;
    });
  }
  addBook(book: IBook): void {
    const { name, id, price } = book;
    const existedBookIdx = this.findBookById(id);
    if (existedBookIdx !== -1) {
      this.increaseQuantity(id);
    } else {
      const cartItem: ICartItem = {
        name,
        id,
        price,
        totalPrice: price,
        quantity: 1,
      };
      this.cartData.cartItems = [...this.cartData.cartItems, cartItem];
    }
  }

  getList(): ICartData {
    return this.cartData;
  }

  findBookById(id: number): number {
    const idx = this.cartData.cartItems.findIndex((item) => {
      return item.id === id;
    });
    return idx;
  }

  buyBook(book: IBook): void {
    this.addBook(book);
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }

  increaseQuantity(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.changeQuantity('incr', id);
    this.updateCartItemTotalPrice(this.cartData.cartItems[existedBookIdx]);
    this.updateCartTotalPrice();
    this.updateCartTotalQuantity();
  }

  decreaseQuantity(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.changeQuantity('decr', id);
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
