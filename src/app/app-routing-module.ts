import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex10 } from './ex10/ex10';
import { Ex14 } from './ex14/ex14';

const routes: Routes = [
  { path: 'ex10', component: Ex10 },
  { path: 'ex14', component: Ex14 },
  { path: '', redirectTo: 'ex10', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
