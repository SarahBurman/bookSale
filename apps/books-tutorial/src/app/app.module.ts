import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookSaleComponent } from './book-sale/book-sale.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipePipe } from './book-list/search-pipe.pipe';
import { SearchByCategoryPipe } from './book-list/search-by-category.pipe';
import { SortByCategoryPipe } from './book-list/sort-by-category.pipe';

@NgModule({
  declarations: [AppComponent, BookSaleComponent, SearchPipePipe, SearchByCategoryPipe, SortByCategoryPipe],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
