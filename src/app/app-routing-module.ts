import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex10 } from './ex10/ex10';
import { Ex14 } from './ex14/ex14';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ListProduct } from './list-product/list-product';
import { Product } from './product/product';
import { ServiceProduct } from './service-product/service-product';

const routes: Routes = [
  { path: 'ex10', component: Ex10 },
  { path: 'ex14', component: Ex14 },
  { path: '', redirectTo: 'ex10', pathMatch: 'full' },
  {path:'service-product-image-event',component:ServiceProductImageEvent},
  {path:'service-product-image-event/:id',component:ServiceProductImageEventDetail},
  {path:'product',component:Product},
  {path:'list-product',component:ListProduct},
  {path:'service-product',component:ServiceProduct},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[
Product,
ListProduct,
ServiceProduct,
]

