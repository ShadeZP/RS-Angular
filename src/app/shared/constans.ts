import { TabsConfig } from '../modeles/appItems';

// eslint-disable-next-line no-shadow
export enum AppPath {
  empty = '',
  productList = 'product-list',
  product = 'product',
  cart = 'cart',
  order = 'order',
  admin = 'admin',
  edit = 'edit',
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
