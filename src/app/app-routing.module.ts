import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/components/book/book.component';
import { BooksComponent } from './books/components/books/books.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderComponent } from './order/components/order/order.component';
import { AppPath } from './shared/constans';

const routes: Routes = [
  { path: AppPath.productList, component: BooksComponent },
  { path: `${AppPath.product}/:id`, component: BookComponent },
  { path: AppPath.cart, component: CartComponent },
  { path: AppPath.order, component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
