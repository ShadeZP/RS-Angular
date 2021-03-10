import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Ibook } from '../../../modeles/book';
import { AppPath, DEFAULT_BOOK } from '../../../shared/constans';
import { RouteService } from '../../../core/services/route.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @Input() book: Ibook;
  @Output() buy = new EventEmitter<Ibook>();
  constructor(private routeService: RouteService) {
    this.book = DEFAULT_BOOK;
  }
  onDeatail(id: number) {
    console.log(`${AppPath.product}/:id`);
    this.routeService.route(`${AppPath.product}/${id}`);
  }

  onBuy(book: Ibook) {
    if (book) {
      this.buy.emit(book);
    }
  }

  ngOnInit(): void {}
  ngOnChange(): void {}
}
