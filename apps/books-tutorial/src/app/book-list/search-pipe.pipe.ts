import { Pipe, PipeTransform } from '@angular/core';
import { book } from './book-list';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(books: book[] | null , searchValue: string): book[] | null {
    if(!searchValue || !books){
      return books;
    }
    const filteredBooks = books.filter(book => {
      return book.title.toLowerCase().includes(searchValue) 
      || book.author.toLowerCase().includes(searchValue)
    });
    return filteredBooks; 
  }

}
