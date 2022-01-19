import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotesRoutingModule } from './lotes-routing.module';
import { LotesComponent } from './lotes.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/componentes/spinner/spinner.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [LotesComponent],
  imports: [
    CommonModule,
    LotesRoutingModule,
    FormsModule,
    SpinnerModule,
    Ng2SearchPipeModule,
  ]
})
export class LotesModule { }
