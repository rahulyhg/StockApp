import { Routes } from '@angular/router';

import { HomePageComponent } from "./home-page.component";
import { HomeComponent } from "./home/home.component";
import { ProductInComponent } from "./product-in/product-in.component";
import { ProductOutComponent } from "./product-out/product-out.component";

export const HomeRoutes: Routes = [{
  path: '',
  component: HomePageComponent,
  children: [{
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  }, {
    path: 'task',
    loadChildren: './home/home.module#HomeModule'
  }, {
    path: 'product-in',
    loadChildren: './product-in/product-in.module#ProductInModule'
  }, {
    path: 'product-out',
    loadChildren: './product-out/product-out.module#ProductOutModule'
  }]
}];

    // {
    //   path: 'home',
    //   component: HomeComponent
    // }, {
    //   path: 'product-in',
    //   component: ProductInComponent
    // }, {
    //   path: 'product-out',
    //   component: ProductOutComponent
    // }

