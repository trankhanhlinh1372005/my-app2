import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Ex10 } from './ex10/ex10';
import { Ex14 } from './ex14/ex14';
import { ProductService } from './product-service';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { Ex13 } from './ex13/ex13';
import { Ex18 } from './ex18/ex18';
import { Product } from './product/product';
import { ListProduct } from './list-product/list-product';
import { ServiceProduct } from './service-product/service-product';

@NgModule({
  declarations: [
    App,
    Ex10,
    Ex14,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    Ex13,
    Ex18,
    Product,
    ListProduct,
    ServiceProduct
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
