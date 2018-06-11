import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductInComponent } from './product-in/product-in.component';
import { ProductOutComponent } from './product-out/product-out.component';

const routes: Routes =[
  { path: 'login',          component: LoginComponent},
  { path: 'dashboard',      component: HomeComponent },
  { path: 'product-in',     component: ProductInComponent },
  { path: 'product-out',    component: ProductOutComponent },
  { path: '',               redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true }),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
