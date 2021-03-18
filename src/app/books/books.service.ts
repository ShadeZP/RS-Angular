import { Injectable } from '@angular/core';
import { IBook } from '../modeles/book';
import { books } from '../mockBooks';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksUrl);
  }

  getBook(id: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.booksUrl}/${id}`);
  }
}
