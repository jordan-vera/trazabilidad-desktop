import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HectareasRoutingModule } from './hectareas-routing.module';
import { HectareasComponent } from './hectareas.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/componentes/spinner/spinner.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [HectareasComponent],
  imports: [
    CommonModule,
    HectareasRoutingModule,
    FormsModule,
    SpinnerModule,
    Ng2SearchPipeModule,
  ]
})
export class HectareasModule { }
