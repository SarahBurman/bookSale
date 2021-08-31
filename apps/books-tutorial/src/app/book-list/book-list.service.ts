import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { book } from './book-list';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  shopingCart = new BehaviorSubject<book[]>([]);
  books = new Array<book>();
  constructor() {  }

  addBookToShopingCart(book: book){
    if(this.books.indexOf(book)== -1) {
      this.books.push(book);
    }
    console.log(this.books);
    this.shopingCart.next(this.books);
  }

  removeBookFromShopingCart(book: book){
    // const index = this.shopingCart.indexOf(book);
    // this.shopingCart = this.shopingCart.filter(b => b !== book);
    this.books.filter(b => b===book);
    this.shopingCart.next(this.books);
    // this.shopingCart.pipe(map(books => {
    //    return books.forEach(b => b!=book);
    // }));
  }

  get cart(): Observable<book[]> {
   return this.shopingCart as Observable<book[]>;
  }
}
