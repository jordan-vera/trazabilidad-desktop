import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { SpinnerModule } from '../componentes/spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    PanelComponent,
    CambiarClaveComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    SpinnerModule,
    Ng2SearchPipeModule,
    QRCodeModule,
    NgxPrintModule
  ]
})
export class PanelModule { }
