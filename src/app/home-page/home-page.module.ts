import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialModule} from '../material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeRoutes } from './home-page.routing';

import { HomePageComponent } from "./home-page.component";
import { HomeComponent } from "./home/home.component";
import { ProductInComponent } from "./product-in/product-in.component";
import { ProductOutComponent } from "./product-out/product-out.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { NavbarModule } from "../shared/navbar/navbar.module";
import { FooterModule } from "../shared/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
  ],
  providers: [

  ],
  declarations: [
    HomePageComponent,
  ]
})

export class HomePageModule {}
