import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutongModule } from './app-routong.module';
import { AppComponent } from './app.component';
import { SearchByCategoryPipe } from './book-list/search-by-category.pipe';
import { SearchPipePipe } from './book-list/search-pipe.pipe';
import { SortByCategoryPipe } from './book-list/sort-by-category.pipe';
import { BookSaleComponent } from './book-sale/book-sale.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

@NgModule({
  declarations: [AppComponent,
    BookSaleComponent,
    SearchPipePipe,
    SearchByCategoryPipe,
    SortByCategoryPipe,
    ShopingCartComponent],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutongModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
