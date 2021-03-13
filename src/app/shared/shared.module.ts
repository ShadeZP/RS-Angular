import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderByPipe,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [AngularMaterialModule, OrderByPipe, HeaderComponent, HomeComponent],
})
export class SharedModule {}
