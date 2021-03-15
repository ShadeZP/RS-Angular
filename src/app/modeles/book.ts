/* eslint-disable no-shadow */
export enum BookCategory {
  detective = 'detective',
  fantasy = 'fantasy',
  scientific = 'scientific',
}

export interface IBook {
  name: string;
  description: string;
  price: number;
  category: BookCategory;
  createDate: number;
  isAvailable: boolean;
  id: number;
}

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
