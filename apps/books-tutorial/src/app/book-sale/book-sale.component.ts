import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { book, Books, Category } from '../book-list/book-list';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookListService } from '../book-list/book-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'new-training-book-sale',
  templateUrl: './book-sale.component.html',
  styleUrls: ['./book-sale.component.scss']
})
export class BookSaleComponent implements OnInit {

  searchBar = new FormControl(null);
  category = new FormControl(null);
  sortByCategory:string;
  incDec:boolean;
  sortedBooks = Books;
  sortState = new Array<{label: string,inc: boolean}>();
  categories = ['', 'Biography', 'Children', 'Business', 'Computing', 'Crime & Thriller', 'Fiction',
  'History', 'Humour', 'Medical'];
  constructor(private route: ActivatedRoute, private bookService: BookListService) {
    this.labels.forEach(label => {
      this.sortState.push({label, inc:false});
    }) 
    this.sortByCategory = 'null';
    this.incDec = true;
  }

  ngOnInit() { }

  get books(): book[] {
    return this.sortedBooks;
  }

  get obooks$(): Observable<book[]> {
    return this.bookService.shopingCart;
  }


  get labels(): string[] {
    let labels = Object.keys(this.books[0]).filter(label => label !== 'id').map(label => {
      if(label == 'publication_date') {
        return "publication date";
      }
      else return label
    });
    labels.push('add to cart');
    return labels;
  }

  cartClicked(button: any, book:book): void {
    button.target.classList.add('clicked');
    this.bookService.addBookToShopingCart(book);
  }

  sortBy(label: string): void {
    this.sortByCategory = label;
    let lableState = this.sortState.find(state => state.label === label);
    if(lableState){
      this.incDec = lableState?.inc? true: false;
      lableState.inc = !this.incDec;
    }
  }  

} 