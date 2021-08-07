import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  sortedBooks = Books;
  sortState = new Array<{label: string,inc: boolean}>();
  categories = ['', 'Biography', 'Children', 'Business', 'Computing', 'Crime & Thriller', 'Fiction',
  'History', 'Humour', 'Medical'];
  constructor(private router: Router) { 
    this.labels.forEach(label => {
      this.sortState.push({label, inc:false});
    }) 
    this.sortByCategory = 'null';
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

  cartClicked(event: any): void {
    event.target.classList.add('clicked');
  }

  sortBy(event:Event, label: string): void {
    this.sortByCategory = label;
  }  

} 