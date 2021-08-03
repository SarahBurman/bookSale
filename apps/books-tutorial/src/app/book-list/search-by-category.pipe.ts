import { Pipe, PipeTransform } from '@angular/core';
import { book } from './book-list';

@Pipe({
  name: 'searchByCategory'
})
export class SearchByCategoryPipe implements PipeTransform {

  transform(books: book[], searchValue: string): book[] | null {
    if(!searchValue || !books){
      return books;
    }
    const filteredBooks = books.filter(book => {
      return book.category.toString().includes(searchValue)
    });
    return filteredBooks; 
  }

}
