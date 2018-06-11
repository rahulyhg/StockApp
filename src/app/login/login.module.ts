import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from "./login.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule

  ],
  declarations: [ LoginComponent ]
})

export class LoginModule {}
