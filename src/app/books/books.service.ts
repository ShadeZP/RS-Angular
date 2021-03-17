import { Injectable } from '@angular/core';
import { IBook } from '../modeles/book';
import { books } from '../mockBooks';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {
  HttpErrorHandler,
  HandleError,
} from '../core/services/http-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksUrl = 'http://localhost:3000/books';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getBooks(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>(this.booksUrl)
      .pipe(catchError(this.handleError<IBook[]>('getBooks', [])));
  }

  getBook(id: string): Observable<IBook> {
    return of(books.find((book) => book.id === +id)) as Observable<IBook>;
  }
}
