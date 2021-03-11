import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RouteService } from '../core/services/route.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [OrderByPipe, HeaderComponent, HomeComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule, OrderByPipe, HeaderComponent, HomeComponent],
})
export class SharedModule {}
