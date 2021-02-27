import { Injectable } from '@angular/core';
import { Ibook, IbookToBuy } from '../modeles/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  booksToBuy: IbookToBuy[] = [];
  constructor() {}

  getList() {
    return this.booksToBuy;
  }

  findBookById(id: number) {
    const idx = this.booksToBuy.findIndex((item) => {
      return item.id === id;
    });
    return idx;
  }

  buyBook(book: Ibook) {
    const { name, id } = book;
    const existedBookIdx = this.findBookById(id);
    if (existedBookIdx !== -1) {
      this.booksToBuy[existedBookIdx] = {
        ...this.booksToBuy[existedBookIdx],
        booksInCart: this.booksToBuy[existedBookIdx].booksInCart + 1,
      };
    } else {
      const bookToBuy: IbookToBuy = {
        name,
        id,
        booksInCart: 1,
      };
      this.booksToBuy.push(bookToBuy);
    }
  }

  increaseBuyCount(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.booksToBuy[existedBookIdx] = {
      ...this.booksToBuy[existedBookIdx],
      booksInCart: this.booksToBuy[existedBookIdx].booksInCart + 1,
    };
  }

  decreaseBuyCount(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.booksToBuy[existedBookIdx] = {
      ...this.booksToBuy[existedBookIdx],
      booksInCart: this.booksToBuy[existedBookIdx].booksInCart - 1,
    };
  }

  deleteBuyBook(id: number): void {
    const existedBookIdx = this.findBookById(id);
    this.booksToBuy.splice(existedBookIdx, 1);
    // this.booksToBuy = this.booksToBuy.filter((book) => book.id !== id);
  }
}
