import { AppPath } from './../../../shared/constans';
import { RouteService } from './../../../core/services/route.service';
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
import { Ibook } from '../../../modeles/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  books: Ibook[] = [];

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private routeService: RouteService
  ) {}
  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }

  onDetails(bookId: number) {
    this.routeService.route(`${AppPath.product}/:bookId`);
  }

  onBuy(book: Ibook) {
    this.cartService.buyBook(book);
  }

  ngOnInit() {
    this.getBooks();
  }
  ngOnChange(): void {
    console.log('ngOnChange', this.books);
  }
}
