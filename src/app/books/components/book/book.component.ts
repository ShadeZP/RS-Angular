import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IBook } from '../../../modeles/book';
import { AppPath, DEFAULT_BOOK } from '../../../shared/constans';
import { RouteService } from '../../../core/services/route.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  @Input() isAuth: boolean;
  @Output() buy = new EventEmitter<IBook>();
  constructor(private routeService: RouteService) {
    this.book = DEFAULT_BOOK;
    this.isAuth = false;
  }
  onDetail(id: number) {
    this.routeService.route(`${AppPath.product}/${id}`);
  }
  onDetailAdmin(id: number) {
    this.routeService.route(
      `${AppPath.admin}/${AppPath.product}/${AppPath.edit}/${id}`
    );
  }

  onBuy(book: IBook) {
    if (book) {
      this.buy.emit(book);
    }
  }

  ngOnInit(): void {}
  ngOnChange(): void {
    console.log('onChange');
  }
}
