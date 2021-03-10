export interface IcartItem {
  name: string;
  price: number;
  totalPrice: number;
  quantity: number;
  id: number;
}

export interface IcartData {
  cartItems: IcartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface Ioption {
  viewValue: string;
  value: string;
  sortValue: string;
  isIncrease: boolean;
}
