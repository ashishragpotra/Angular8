import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { ProductDetailComponent  } from './product/product-detail/product-detail.component';
import { ProductListComponent  } from './product/product-list/product-list.component';
import {AppRoutingModule } from './app.routing.module';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
