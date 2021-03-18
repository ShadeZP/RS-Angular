import { Injectable } from '@angular/core';
import { IBook } from '../../modeles/book';
import { ICartItem, ICartData } from '../../modeles/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartHttpService } from './cart-http.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData: ICartData = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
  cartData$: BehaviorSubject<ICartData> = new BehaviorSubject<ICartData>(
    this.cartData
  );

  constructor(private cartHttp: CartHttpService) {
    this.cartHttp.getBooks().subscribe((books) => {
      this.cartData.cartItems = books;
    });
  }

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

  updateCartItemTotalPrice(item: ICartItem) {
    item.totalPrice = item.price * item.quantity;
  }

  getList(): {};

  getProducts(): {};

  findBookById(id: number) {
    return this.cartData.cartItems.findIndex((item) => {
      return item.id === id;
    });
  }

  buyBook(book: IBook): Observable<any> {
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
      return this.http.put(this.cartItemUrl, cartItem);
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
