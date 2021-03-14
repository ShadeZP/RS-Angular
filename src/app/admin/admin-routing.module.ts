import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppPath } from '../shared/constans';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AdminBookComponent } from './components/admin-book/admin-book.component';
import { BookDetailComponent } from '../books/components/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: `${AppPath.productList}`, component: AdminBookComponent },
  { path: `${AppPath.product}/add`, component: AddBookComponent },
  { path: `${AppPath.product}/edit/:id`, component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
