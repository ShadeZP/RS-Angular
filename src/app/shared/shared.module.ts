import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [OrderByPipe, HeaderComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule, OrderByPipe, HeaderComponent],
})
export class SharedModule {}
