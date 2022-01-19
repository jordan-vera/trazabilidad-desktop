import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../componentes/spinner/spinner.component';
import { SpinnerModule } from '../componentes/spinner/spinner.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SpinnerModule
  ]
})
export class LoginModule { }
