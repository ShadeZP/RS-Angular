/* eslint-disable no-shadow */
export enum BookCategory {
  detective = 'detective',
  fantasy = 'fantasy',
  scientific = 'scientific',
}

export interface Ibook {
  name: string;
  description: string;
  price: number;
  category: BookCategory;
  createDate: number;
  isAvailable: boolean;
  id: number;
}

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
