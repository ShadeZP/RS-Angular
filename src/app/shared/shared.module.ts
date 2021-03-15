import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [OrderByPipe],
  imports: [CommonModule],
  exports: [AngularMaterialModule, OrderByPipe],
})
export class SharedModule {}
