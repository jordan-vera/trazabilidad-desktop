import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluadoresRoutingModule } from './evaluadores-routing.module';
import { EvaluadoresComponent } from './evaluadores.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/componentes/spinner/spinner.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [EvaluadoresComponent],
  imports: [
    CommonModule,
    EvaluadoresRoutingModule,
    SpinnerModule,
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class EvaluadoresModule { }
