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
