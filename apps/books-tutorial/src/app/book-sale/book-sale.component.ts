import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { book, Books, Category } from '../book-list/book-list';

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
  shopingCart: Array<book>;
  sortState = new Array<{label: string,inc: boolean}>();
  categories = ['', 'Biography', 'Children', 'Business', 'Computing', 'Crime & Thriller', 'Fiction',
  'History', 'Humour', 'Medical'];
  constructor() { 
    this.labels.forEach(label => {
      this.sortState.push({label, inc:false});
    }) 
    this.sortByCategory = 'null';
    this.incDec = true;
    this.shopingCart = new Array();
  }

  ngOnInit(): void {}

  get books(): book[] {
    return this.sortedBooks;
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
    this.shopingCart.push(book);
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