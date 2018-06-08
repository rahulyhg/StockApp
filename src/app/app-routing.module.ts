import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes =[
  { path: 'login',          component: LoginComponent},
  { path: 'dashboard',      component: HomeComponent },
  { path: 'user',           component: UserComponent },
  { path: 'table',          component: TablesComponent },
  { path: 'typography',     component: TypographyComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent },
  { path: 'notifications',  component: NotificationsComponent },
  { path: 'upgrade',        component: UpgradeComponent },
  { path: '',          redirectTo: '/login', pathMatch: 'full' }
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
