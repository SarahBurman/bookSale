import { Pipe, PipeTransform } from '@angular/core';
import { book, Books } from './book-list';

@Pipe({
  name: 'sortByCategory'
})
export class SortByCategoryPipe implements PipeTransform {

  sortState = new Array<{label: string,inc: boolean}>();
  labels = this.getLabels();
  sortedBooks = new Array<book>() ;
  
  transform(books: book[] | null , sortValue: string): book[] | null {
    if(!sortValue || !books || sortValue === 'null'){
      return books;
    }
    if(this.labels.includes(sortValue) ) {
      const labelState = this.sortState.find(state => state.label === sortValue);
      if(labelState) {
        this.sortedBooks = books;
        this.sort(sortValue,labelState.inc);
        labelState.inc = !labelState.inc;
      }
    }

    return this.sortedBooks;
  }
  
  private getLabels(): string[] {
    let labels = Object.keys(Books[0]).filter(label => label !== 'id').map(label => {
      if(label == 'publication_date') {
        return "publication date";
      }
      else return label
    });
    labels.forEach(label => {
      this.sortState.push({label, inc:true});
    }) 
    return labels;
  }

 private sort(label: string, inc: boolean): void {
    if(inc){
      switch (label) {
        case 'title':
          this.sortedBooks.sort((book1, book2) => {
            return book2.title.localeCompare(book1.title);
          });
          break;
        case 'author':
          this.sortedBooks.sort((book1, book2) => {
            return book2.author.localeCompare(book1.author);
          });
          break;
        case 'category':
          this.sortedBooks.sort((book1, book2) => {
            return book1.category.localeCompare(book2.category);
          });
          break;
        case 'price':
          this.sortedBooks.sort((book1, book2) => {
            return book1.price - book2.price;
          });
          break;
        case 'publication date':
          this.sortedBooks.sort((book1, book2) => {
            return book1.publication_date.getTime() - book2.publication_date.getTime();
          });
          break;
        default:
          break;
      }
    } else {
      switch (label) {
        case 'title':
          this.sortedBooks.sort((book1, book2) => {
            return book1.title.localeCompare(book2.title);
          });
          break;
        case 'author':
          this.sortedBooks.sort((book1, book2) => {
            return book1.author.localeCompare(book2.author);
          });
          break;
        case 'category':
          this.sortedBooks.sort((book1, book2) => {
            return book2.category.localeCompare(book1.category);
          });
          break;
        case 'price':
          this.sortedBooks.sort((book1, book2) => {
            return book2.price - book1.price;
          });
          break;
        case 'publication date':
          this.sortedBooks.sort((book1, book2) => {
            return book2.publication_date.getTime() - book1.publication_date.getTime();
          });
          break;
        default:
          break;
      }
    }
  }

}
