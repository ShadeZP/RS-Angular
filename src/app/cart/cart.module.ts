import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { HighlightDirective } from './directives/highlight.directive';
import { HighbindDirective } from './directives/highbind.directive';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    HighlightDirective,
    HighbindDirective,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CartComponent],
})
export class CartModule {}
