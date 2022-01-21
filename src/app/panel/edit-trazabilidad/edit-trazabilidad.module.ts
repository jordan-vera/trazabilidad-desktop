import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTrazabilidadRoutingModule } from './edit-trazabilidad-routing.module';
import { EditTrazabilidadComponent } from './edit-trazabilidad.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditTrazabilidadComponent],
  imports: [
    CommonModule,
    EditTrazabilidadRoutingModule,
    FormsModule
  ]
})
export class EditTrazabilidadModule { }
