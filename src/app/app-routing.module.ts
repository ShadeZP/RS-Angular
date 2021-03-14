import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/components/books/books.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderComponent } from './order/components/order/order.component';
import { AppPath } from './shared/constans';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminGuard } from './admin/guards/admin.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: AppPath.empty, redirectTo: AppPath.home, pathMatch: 'full' },
  { path: AppPath.home, component: HomeComponent },
  { path: AppPath.productList, component: BooksComponent },
  { path: `${AppPath.product}/:id`, component: BookDetailComponent },
  { path: AppPath.cart, component: CartComponent },
  { path: AppPath.order, component: OrderComponent },
  {
    path: AppPath.admin,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AdminGuard],
  },
  { path: AppPath.false, component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
