import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [BooksComponent, BookComponent, BookDetailComponent],
  imports: [CommonModule, SharedModule],
  exports: [BooksComponent],
})
export class BooksModule {}
