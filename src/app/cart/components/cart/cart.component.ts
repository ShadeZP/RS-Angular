import { CartService } from '../../services/cart.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ICartData, ICartItem, IOption } from '../../../modeles/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnChanges {
  cartData$: Observable<ICartData> = new Observable<ICartData>();
  selectOptions: IOption[];
  index: number;

  constructor(private cartService: CartService) {
    this.selectOptions = [
      {
        viewValue: 'by decreasing price',
        value: 'priceDecr',
        sortValue: 'totalPrice',
        isIncrease: false,
      },
      {
        viewValue: 'by increasing price',
        value: 'priceIncr',
        sortValue: 'totalPrice',
        isIncrease: true,
      },
      {
        viewValue: 'by name',
        value: 'name',
        sortValue: 'name',
        isIncrease: false,
      },
      {
        viewValue: 'by quantity',
        value: 'quantity',
        sortValue: 'quantity',
        isIncrease: false,
      },
    ];
    this.index = 0;
  }
  getList() {
    this.cartData$ = this.cartService.getList();
    console.log(this.cartData$);
  }

  ngOnInit(): void {
    this.getList();
  }

  ngOnChanges(): void {
    console.log('on change');
  }

  changeIdx(event: any): void {
    this.index = this.selectOptions.findIndex((e) => e.value === event.value);
  }
  identify(index: number, item: ICartItem) {
    return item.id;
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
