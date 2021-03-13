import { Observable } from 'rxjs';
import { CartService } from './../../../cart/cart.service';
import { BooksService } from './../../books.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IBook } from '../../../modeles/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];

  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}
  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }

  onBuy(book: IBook) {
    this.cartService.buyBook(book);
  }

  ngOnInit() {
    this.getBooks();
  }
  ngOnChange(): void {
    console.log('ngOnChange', this.books);
  }
}
