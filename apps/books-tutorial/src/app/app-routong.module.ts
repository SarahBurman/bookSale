import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { BookSaleComponent } from './book-sale/book-sale.component';

const routes: Routes = [
  { 
    path: '',
    component: BookSaleComponent
  },
  { 
    path: 'cart',
    component: ShopingCartComponent
  },
  { 
    path: '**',
    redirectTo: '',
    component: AppComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutongModule { }
