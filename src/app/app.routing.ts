import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadChildren: './home-page/home-page.module#HomePageModule',
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  }]
}];
