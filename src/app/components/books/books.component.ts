import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Ibook } from '../../modeles/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  @Input() books: Ibook[];
  @Output() buyBook = new EventEmitter<Ibook>();
  constructor() {
    this.books = [];
  }

  onBuy(book: Ibook) {
    this.buyBook.emit(book);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.books);
  }
  ngOnChange(): void {
    console.log('ngOnChange', this.books);
  }
}
