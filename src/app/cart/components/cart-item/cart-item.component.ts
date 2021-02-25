import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IbookToBuy } from 'src/app/modeles/book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() item: IbookToBuy;
  @Output() increaseBuyCount = new EventEmitter<number>();
  @Output() decreaseBuyCount = new EventEmitter<number>();
  @Output() deleteBuyBook = new EventEmitter<number>();
  constructor() {
    this.item = {
      name: '',
      id: 1,
      booksInCart: 1,
    };
  }

  onIncr(id: number) {
    this.increaseBuyCount.emit(id);
  }
  onDcr(id: number) {
    this.decreaseBuyCount.emit(id);
  }
  onDel(id: number) {
    this.deleteBuyBook.emit(id);
  }

  ngOnInit(): void {
    console.log(this.item);
  }
}
