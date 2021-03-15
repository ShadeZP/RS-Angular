import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { ICartData, ICartItem, IOption } from '../../../modeles/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartData: ICartData = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
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
  getList(): void {
    this.cartData = this.cartService.getList();
  }

  ngOnInit(): void {
    this.getList();
  }

  changeIdx(event: any): void {
    this.index = this.selectOptions.findIndex((e) => e.value === event.value);
  }

  identify(index: number, item: ICartItem): number {
    return item.id;
  }

  onIncr(id: number): void {
    this.cartService.increaseQuantity(id);
  }
  onDcr(id: number): void {
    this.cartService.decreaseQuantity(id);
  }
  onDel(id: number): void {
    this.cartService.removeBook(id);
  }
}
