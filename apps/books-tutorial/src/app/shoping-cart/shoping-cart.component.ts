import { Component, OnInit } from '@angular/core';
import { book, Books } from '../book-list/book-list';
import { BookListService } from '../book-list/book-list.service';

@Component({
  selector: 'new-training-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {

  books: Array<book>
  constructor(private bookService: BookListService) {
    if(this.bookService.books.length) {
      this.books = this.bookService.books;
    } else {
      this.books = Books.slice(0 , Books.length - Math.floor(Math.random() * 10))
    }

    console.log(this.books);
    
  }

  ngOnInit(): void {
  }

}
