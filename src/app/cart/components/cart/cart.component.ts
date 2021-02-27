import { CartService } from './../../cart.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { IbookToBuy } from '../../../modeles/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  @Output() increaseBuyCount = new EventEmitter<number>();
  @Output() decreaseBuyCount = new EventEmitter<number>();
  @Output() deleteBuyBook = new EventEmitter<number>();
  list: IbookToBuy[] = [];
  constructor(private cartService: CartService) {}
  getList() {
    this.list = this.cartService.getList();
  }

  ngOnInit(): void {
    this.getList();
  }

  onIncr(id: number) {
    // this.increaseBuyCount.emit(id);
    this.cartService.increaseBuyCount(id);
  }
  onDcr(id: number) {
    this.cartService.decreaseBuyCount(id);
  }
  onDel(id: number) {
    this.cartService.deleteBuyBook(id);
  }
}
