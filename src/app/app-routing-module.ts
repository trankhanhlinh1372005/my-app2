import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex10Component } from './ex10/ex10';

const routes: Routes = [
  { path: 'ex10', component: Ex10Component },
  { path: '', redirectTo: 'ex10', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
