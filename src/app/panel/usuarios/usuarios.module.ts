import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/componentes/spinner/spinner.module';


@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    SpinnerModule
  ]
})
export class UsuariosModule { }
