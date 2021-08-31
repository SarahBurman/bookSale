import { Component, OnInit } from '@angular/core';
import { iif, Observable, Subject } from 'rxjs';
import { book, Books } from '../book-list/book-list';
import { BookListService } from '../book-list/book-list.service';

@Component({
  selector: 'new-training-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {
  
  
  books: Observable<book[]>;
  constructor(private bookService: BookListService) {    
    this.books = this.bookService.cart;
  }

  get bookCart$(): Observable<book[]> {
    return this.books;
  }

  removeBook(book:book): void {
    this.bookService.removeBookFromShopingCart(book);
  }

  ngOnInit(): void {
    this.books = this.bookService.cart;
  }

}
