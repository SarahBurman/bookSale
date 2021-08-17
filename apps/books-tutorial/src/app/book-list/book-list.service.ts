import { Injectable } from '@angular/core';
import { book } from './book-list';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  shopingCart: Array<book>;
  constructor() { 
    this.shopingCart = new Array<book>();
  }

  addBookToShopingCart(book: book){
    if (this.shopingCart.indexOf(book) === -1) {
      this.shopingCart.push(book);
    }
  }

  removeBookFromShopingCert(book: book){
    const index = this.shopingCart.indexOf(book);
    this.shopingCart = this.shopingCart.filter(b => b !== book);
  }

  get books(): Array<book> {
    return this.shopingCart;
  }
}
