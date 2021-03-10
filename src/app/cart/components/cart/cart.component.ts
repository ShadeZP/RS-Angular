import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { IcartData, IcartItem, Ioption } from '../../../modeles/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartData: IcartData = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
  selectOptions: Ioption[];
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
    this.cartData = this.cartService.getList();
  }

  ngOnInit(): void {
    this.getList();
  }

  changeIdx(event: any): void {
    this.index = this.selectOptions.findIndex((e) => e.value === event.value);
  }
  identify(index: number, item: IcartItem) {
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
