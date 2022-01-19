import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportadorasRoutingModule } from './exportadoras-routing.module';
import { ExportadorasComponent } from './exportadoras.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/componentes/spinner/spinner.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [ExportadorasComponent],
  imports: [
    CommonModule,
    ExportadorasRoutingModule,
    FormsModule,
    SpinnerModule,
    Ng2SearchPipeModule
  ]
})
export class ExportadorasModule { }
