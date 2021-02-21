import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IbookToBuy } from '../../modeles/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  @Input() list: IbookToBuy[];
  @Output() increaseBuyCount = new EventEmitter<number>();
  @Output() decreaseBuyCount = new EventEmitter<number>();
  @Output() deleteBuyBook = new EventEmitter<number>();
  constructor() {
    this.list = [];
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

  ngOnInit(): void {}
}
