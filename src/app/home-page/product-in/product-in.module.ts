import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductInComponent } from "./product-in.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ProductInComponent
    }]),

  ],
  declarations: [ ProductInComponent ]
})

export class ProductInModule {}
