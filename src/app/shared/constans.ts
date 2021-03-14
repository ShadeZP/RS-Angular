import { TabsConfig } from '../modeles/appItems';
import { BookCategory } from '../modeles/book';

// eslint-disable-next-line no-shadow
export enum AppPath {
  empty = '',
  home = 'home',
  productList = 'product-list',
  product = 'product',
  cart = 'cart',
  order = 'order',
  admin = 'admin',
  edit = 'edit',
  false = '**',
}

export const appTabsConfig: TabsConfig[] = [
  {
    path: AppPath.productList,
    label: 'Products',
    forAdmin: true,
    forUser: true,
  },
  {
    path: AppPath.cart,
    label: 'Cart',
    forAdmin: false,
    forUser: true,
  },
  {
    path: AppPath.order,
    label: 'Orders',
    forAdmin: false,
    forUser: true,
  },
  {
    path: AppPath.admin,
    label: 'Admin',
    forAdmin: true,
    forUser: false,
  },
];

export const DEFAULT_BOOK = {
  name: '',
  description: '',
  price: 0,
  category: BookCategory.detective,
  createDate: 0,
  isAvailable: false,
  id: 0,
};
