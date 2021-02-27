import { Injectable } from '@angular/core';
import { BookCategory, Ibook } from '../modeles/book';
import { books } from '../mockBooks';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<Ibook[]> {
    const booksArr = of(books);
    return booksArr;
  }
}
