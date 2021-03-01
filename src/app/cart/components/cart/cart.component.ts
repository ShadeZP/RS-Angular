import { CartService } from './../../cart.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { IcartData, IcartItem } from '../../../modeles/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Output() increaseBuyCount = new EventEmitter<number>();
  @Output() decreaseBuyCount = new EventEmitter<number>();
  @Output() deleteBuyBook = new EventEmitter<number>();
  cartData: IcartData = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
  constructor(private cartService: CartService) {}
  getList() {
    this.cartData = this.cartService.getList();
  }

  ngOnInit(): void {
    this.getList();
  }

  onIncr(id: number) {
    this.cartService.increaseQuantity(id);
  }
  onDcr(id: number) {
    this.cartService.decreaseQuantity(id);
  }
  onDel(id: number) {
    this.cartService.removeBook(id);
  }
}
