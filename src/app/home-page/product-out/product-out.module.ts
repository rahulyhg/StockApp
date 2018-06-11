import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductOutComponent } from "./product-out.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ProductOutComponent
    }]),

  ],
  declarations: [ ProductOutComponent ]
})

export class ProductOutModule {}
