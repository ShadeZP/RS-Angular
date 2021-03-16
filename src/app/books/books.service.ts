import { Injectable } from '@angular/core';
import { IBook } from '../modeles/book';
import { books } from '../mockBooks';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<IBook[]> {
    return of(books);
  }

  getBook(id: string): Observable<IBook> {
    return of(books.find((book) => book.id === +id)) as Observable<IBook>;
  }
}
