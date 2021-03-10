import { Injectable } from '@angular/core';
import { Ibook } from '../modeles/book';
import { books } from '../mockBooks';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<Ibook[]> {
    return of(books);
  }

  getBook(id: number): Observable<Ibook> {
    // @ts-ignore
    return of(books.find((book) => book.id === id));
  }
}
