import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/components/books/books.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderComponent } from './order/components/order/order.component';

const routes: Routes = [
  { path: 'home', component: BooksComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
