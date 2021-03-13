export interface ICartItem {
  name: string;
  price: number;
  totalPrice: number;
  quantity: number;
  id: number;
}

export interface ICartData {
  cartItems: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface IOption {
  viewValue: string;
  value: string;
  sortValue: string;
  isIncrease: boolean;
}
