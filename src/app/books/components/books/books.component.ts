import { AppPath } from '../../../shared/constans';
import { RouteService } from '../../../core/services/route.service';
import { CartService } from '../../../cart/cart.service';
import { BooksService } from '../../books.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../../../modeles/book';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];
  isAuth$ = false;

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private routeService: RouteService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getBooks();
    this.loginService.isLogin$.subscribe((isLogin) => (this.isAuth$ = isLogin));
  }
  ngOnChange(): void {}

  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }

  onDetails(bookId: number) {
    this.routeService.route(`${AppPath.product}/${bookId}`);
  }

  onBuy(book: IBook) {
    this.cartService.buyBook(book);
  }

  trackByFn(index: number, item: IBook): number {
    return item.id;
  }

  onAddNewBook() {
    this.routeService.route(`${AppPath.admin}/${AppPath.product}/add`);
  }
}
