import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import { Ibook } from '../../../modeles/book';
import { DEFAULT_BOOK } from '../../../shared/constans';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: Ibook;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BooksService
  ) {
    this.book = DEFAULT_BOOK;
  }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      // @ts-ignore
      const id = +this.route.snapshot.paramMap.get('id');
      this.bookService.getBook(id).subscribe((book) => (this.book = book));
    }
  }

  goBack(): void {
    this.location.back();
  }
}
