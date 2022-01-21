import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Detalle, DetalleTemporal } from 'src/app/modelo/Detalle';
import { Evaluador } from 'src/app/modelo/Evaluador';
import { Exportadora } from 'src/app/modelo/Exportadora';
import { Lote } from 'src/app/modelo/Lote';
import { InfoQR, Trazabilidad } from 'src/app/modelo/Trazabilidad';
import { DetalleService } from 'src/app/servicios/Detalle.service';
import { EvaluadorService } from 'src/app/servicios/Evaluador.service';
import { ExportadorasService } from 'src/app/servicios/Exportadoras.service';
import { Fecha } from 'src/app/servicios/fecha.service';
import { LoteService } from 'src/app/servicios/Lote.service';
import { TrazabilidadService } from 'src/app/servicios/Trazablidad.service';
import { modalCloseInQR } from 'src/assets/modal.js';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.scss']
})
export class TrazabilidadComponent implements OnInit {

  public evaluadores: Evaluador[];
  public trazabilidad: Trazabilidad = new Trazabilidad(null, null, null, '', null, null, '', '', 0);
  public trazabilidadOne: Trazabilidad = new Trazabilidad(0, 0, '', '', 0, '', '', '', 0);
  public evaluadorOne: Evaluador = new Evaluador(null, '', '', '');
  public exportadoraOne: Exportadora = new Exportadora(null, '');
  public trazabilidades: any[];
  public buscadortxt: string = '';

  public valuadorEstado: boolean = false;
  public semanaEstado: boolean = false;
  public exportadoraEstado: boolean = false;
  public porcentajeHigieneEstado: boolean = false;
  public calificacionEstado: boolean = false;
  public cantidadcajasEstado: boolean = false;

  public exportadoras: Exportadora[];

  public lotes: Lote[];
  public idloteDetalle: any;
  public cantidadCajaDetalle: number = null;
  public observacionDetalle: string = '';
  public detalleTemporal: DetalleTemporal[] = [];
  public detalleCreate: Detalle = new Detalle(null, null, null, '', '', null);
  public detalles: Detalle[];
  public infoqr: string = '';
  public s: any[] = Array(192);

  exportAsConfig: ExportAsConfig = {
    type: 'pdf', 
    elementIdOrContent: 'ssss'
  }

  constructor(
    private _evaluadorService: EvaluadorService,
    private _trazabilidadService: TrazabilidadService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _exportadoraService: ExportadorasService,
    private _loteService: LoteService,
    private _detalleService: DetalleService,
    private _router: Router,
    private exportAsService: ExportAsService
  ) { }

  ngOnInit(): void {
    this.mostrarEvaluador();
    this.mostrarAll();
    this.getExportadoras();
    this.getLotes();
  }

  export() {
    this.exportAsService.save(this.exportAsConfig, 'Código QR ' + Fecha.fechaActual() + ' ' + Fecha.horaActual()).subscribe(() => {
      // save started
    });
  }
  


  generarImpresion(lote, exportadora, evaluador, fecha, hora, semana, higiene, calificacion): void {
    this.infoqr = lote + '-' + exportadora + '-' + evaluador + '-' + fecha + '-' + hora + '-' + semana + '-' + higiene + '-' + calificacion;
  }

  irAhEditTrazabilidad(id): void {
    this._router.navigate(['/panel/edit-trazabilidad', id]);
  }

  printQR(): void {
    modalCloseInQR()
  }

  addDetalleTemporal(): void {
    var estadoExistente: boolean = false;
    for (let i = 0; i < this.detalleTemporal.length; i++) {
      if (this.idloteDetalle == this.detalleTemporal[i].IDLOTE) {
        estadoExistente = true;
      }
    }

    if (estadoExistente == false) {
      var nombreLote = '';
      for (let i = 0; i < this.lotes.length; i++) {
        if (this.idloteDetalle == this.lotes[i].IDLOTE) {
          nombreLote = this.lotes[i].NOMBRELOTE;
        }
      }
      this.detalleTemporal.push({ IDLOTE: this.idloteDetalle, LOTE: nombreLote, CANT_CAJAS: this.cantidadCajaDetalle, OBSERVACION: this.observacionDetalle })
      this.idloteDetalle = null;
      this.cantidadCajaDetalle = null;
      this.observacionDetalle = '';
      this.calcularTotalCajas();
    } else {
      this.toastr.error('Error', 'Este lote ya se encuentra agregado');
    }
  }

  calcularTotalCajas(): void {
    this.trazabilidad.CANTIDADCAJAS = '';
    var contador = 0;
    for (let i = 0; i < this.detalleTemporal.length; i++) {
      contador = contador + this.detalleTemporal[i].CANT_CAJAS;
    }
    this.trazabilidad.CANTIDADCAJAS = contador + '';
  }

  eliminarDetalleTemporal(i): void {
    this.detalleTemporal.splice(i, 1);
  }

  getLotes(): void {
    this._loteService.getAll().subscribe(
      response => {
        this.lotes = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

  getExportadoras(): void {
    this._exportadoraService.getAll().subscribe(
      response => {
        this.exportadoras = response.response;
      }, error => {
        console.log(error)
      }
    )
  }

  guardar(): void {
    if (this.trazabilidad.IDEVALUADOR == 0 || this.trazabilidad.IDEVALUADOR == null) {
      this.valuadorEstado = true;
    } else {
      this.valuadorEstado = false;
      if (this.trazabilidad.SEMANA == 0 || this.trazabilidad.SEMANA == null) {
        this.semanaEstado = true;
      } else {
        this.semanaEstado = false;
        if (this.trazabilidad.IDEXPORTADORA == 0 || this.trazabilidad.IDEXPORTADORA == null) {
          this.exportadoraEstado = true
        } else {
          this.exportadoraEstado = false;
          if (this.trazabilidad.PORCENTAJEHIGIENE == '' || this.trazabilidad.PORCENTAJEHIGIENE == null) {
            this.porcentajeHigieneEstado = true;
          } else {
            this.porcentajeHigieneEstado = false;
            if (this.trazabilidad.CALIFICACIONEVALUADOR == '' || this.trazabilidad.CALIFICACIONEVALUADOR == null) {
              this.calificacionEstado = true;
            } else {
              this.calificacionEstado = false;
              if (this.trazabilidad.CANTIDADCAJAS == '' || this.trazabilidad.CANTIDADCAJAS == null) {
                this.cantidadcajasEstado = true;
              } else {
                this.cantidadcajasEstado = false;
                this.spinner.show();
                this.trazabilidad.FECHA = Fecha.fechaActual();
                this.trazabilidad.HORA = Fecha.horaActual();
                this.trazabilidad.IDEVALUADOR = + this.trazabilidad.IDEVALUADOR;
                this.trazabilidad.IDEXPORTADORA = +this.trazabilidad.IDEXPORTADORA;
                this._trazabilidadService.create(this.trazabilidad).subscribe(
                  response => {
                    this.guardarDetalle(response.response);
                    this.spinner.hide();
                    this.toastr.success('Hecho', 'Registro guardado correctamente');
                    this.mostrarAll();
                    this.limpiarCampos();
                  }, error => {
                    this.spinner.hide();
                    console.log(error)
                  }
                )
              }
            }
          }
        }
      }
    }
  }

  guardarDetalle(idtrazabilidad): void {
    if (this.detalleTemporal.length > 0) {
      for (let i = 0; i < this.detalleTemporal.length; i++) {
        this.detalleCreate = new Detalle(0, this.detalleTemporal[i].IDLOTE, this.detalleTemporal[i].CANT_CAJAS, Fecha.fechaActual(), this.detalleTemporal[i].OBSERVACION, idtrazabilidad);
        this._detalleService.create(this.detalleCreate).subscribe(
          response => {
            this.detalleTemporal.splice(i, 1);
          }, error => {
            console.log(error);
          }
        )
      }
    }
  }

  limpiarCampos(): void {
    var dirtyFormID = 'formTrazabilidad';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }


  mostrarAll(): void {
    this.spinner.show();
    this._trazabilidadService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.trazabilidades = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarOne(id): void {
    this.spinner.show();
    this._trazabilidadService.getOne(id).subscribe(
      response => {
        this.spinner.hide();
        this.trazabilidadOne = response.response;
        this.evaluadorOne = response.response;
        this.exportadoraOne = response.response;
        this.getDetallesOne(id);
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  getDetallesOne(id): void {
    this.detalles = [];
    this._detalleService.getPortrazabilidad(id).subscribe(
      response => {
        this.detalles = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

  eliminar(id): void {
    this.spinner.show();
    this._detalleService.deleteall(id).subscribe(
      response => {
        this._trazabilidadService.delete(id).subscribe(
          response => {
            this.spinner.hide();
            this.toastr.success('Hecho', 'Registro eliminado correctamente');
            this.mostrarAll();
          }, error => {
            this.spinner.hide();
            console.log(error);
          }
        )
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarEvaluador(): void {
    this._evaluadorService.getAll().subscribe(
      response => {
        this.evaluadores = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
