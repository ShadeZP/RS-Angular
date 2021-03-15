import { Injectable } from '@angular/core';
import { BookCategory, IBook } from '../modeles/book';
import { books } from '../mockBooks';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<IBook[]> {
    const booksArr = of(books);
    return booksArr;
  }
}
