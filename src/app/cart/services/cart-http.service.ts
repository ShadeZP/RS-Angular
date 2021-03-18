import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICartItem } from '../../modeles/cart';
import { IBook } from '../../modeles/book';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  private cartUrl = 'http://localhost:3000/cart';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(this.cartUrl);
  }
  getBook(id: string): Observable<ICartItem> {
    return this.http.get<ICartItem>(`${this.cartUrl}/${id}`);
  }
  addBook(book: IBook): Observable<ICartItem> {
    return this.http
      .post<ICartItem>(this.cartUrl, this.createCartItem(book))
      .pipe(share());
  }
  updateBook(book: IBook): Observable<ICartItem> {
    return this.http
      .put<ICartItem>(`${this.cartUrl}/${book.id}`, book)
      .pipe(share());
  }
  removeBook(id: string) {
    return this.http.delete(`${this.cartUrl}/${id}`);
  }

  createCartItem(book: IBook): ICartItem {
    const { name, id, price } = book;
    return {
      name,
      id,
      price,
      totalPrice: price,
      quantity: 1,
    };
  }
}
