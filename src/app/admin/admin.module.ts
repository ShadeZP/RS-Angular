import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AdminBookComponent } from './components/admin-book/admin-book.component';

@NgModule({
  declarations: [AdminComponent, AddBookComponent, AdminBookComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
