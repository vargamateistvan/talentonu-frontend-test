import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { GlobalsService } from './common/services/globals.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
