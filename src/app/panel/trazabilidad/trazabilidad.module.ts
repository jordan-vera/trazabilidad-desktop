import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrazabilidadRoutingModule } from './trazabilidad-routing.module';
import { TrazabilidadComponent } from './trazabilidad.component';
import { SpinnerModule } from 'src/app/componentes/spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [TrazabilidadComponent],
  imports: [
    CommonModule,
    TrazabilidadRoutingModule,
    SpinnerModule,
    FormsModule,
    Ng2SearchPipeModule,
    QRCodeModule,
    NgxPrintModule
  ]
})
export class TrazabilidadModule { }
