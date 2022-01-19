import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdministradorService } from './servicios/Administrador.service';
import { EvaluadorService } from './servicios/Evaluador.service';
import { LoteService } from './servicios/Lote.service';
import { CantonprovinciaService } from './servicios/Cantonprovincia.service';
import { TrazabilidadService } from './servicios/Trazablidad.service';
import { ExportadorasService } from './servicios/Exportadoras.service';
import { DetalleService } from './servicios/Detalle.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    AdministradorService,
    EvaluadorService,
    LoteService,
    CantonprovinciaService,
    TrazabilidadService,
    ExportadorasService,
    DetalleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
