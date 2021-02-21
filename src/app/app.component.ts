import { Component } from '@angular/core';
import { books } from './mockBooks';
import { Ibook, IbookToBuy } from './modeles/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RS-Angular';
  books: Ibook[] = books;
  booksToBuy: IbookToBuy[] = [];

  buyBook(book: Ibook) {
    const { name, id } = book;
    const existedBookIdx = this.booksToBuy.findIndex((item) => {
      return item.id === id;
    });
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
      this.booksToBuy = [...this.booksToBuy, bookToBuy];
    }
  }

  increaseBuyCount(id: number): void {
    this.booksToBuy = this.booksToBuy.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          booksInCart: book.booksInCart + 1,
        };
      }
      return book;
    });
  }

  decreaseBuyCount(id: number): void {
    this.booksToBuy = this.booksToBuy.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          booksInCart: book.booksInCart - 1,
        };
      }
      return book;
    });
  }

  deleteBuyBook(id: number): void {
    console.log(3);
    this.booksToBuy = this.booksToBuy.filter((book) => book.id !== id);
  }
}
