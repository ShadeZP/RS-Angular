import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ICartItem } from 'src/app/modeles/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() item: ICartItem;
  @Output() increaseBuyCount = new EventEmitter<number>();
  @Output() decreaseBuyCount = new EventEmitter<number>();
  @Output() deleteBuyBook = new EventEmitter<number>();
  constructor() {
    this.item = {
      name: '',
      price: 0,
      totalPrice: 0,
      id: 1,
      quantity: 1,
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

  ngOnInit(): void {}
}
