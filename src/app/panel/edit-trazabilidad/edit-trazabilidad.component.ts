import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Detalle } from 'src/app/modelo/Detalle';
import { Evaluador } from 'src/app/modelo/Evaluador';
import { Exportadora } from 'src/app/modelo/Exportadora';
import { Trazabilidad } from 'src/app/modelo/Trazabilidad';
import { DetalleService } from 'src/app/servicios/Detalle.service';
import { EvaluadorService } from 'src/app/servicios/Evaluador.service';
import { ExportadorasService } from 'src/app/servicios/Exportadoras.service';
import { TrazabilidadService } from 'src/app/servicios/Trazablidad.service';

@Component({
  selector: 'app-edit-trazabilidad',
  templateUrl: './edit-trazabilidad.component.html',
  styleUrls: ['./edit-trazabilidad.component.css']
})
export class EditTrazabilidadComponent implements OnInit {

  public idtrazabilidad: number = 0;
  public trazabilidad: Trazabilidad = new Trazabilidad(0, 0, '', '', 0, '', '', '', 0);
  public evaluadores: Evaluador[];
  public exportadoras: Exportadora[];
  public detalle: Detalle = new Detalle(0, 0, 0, '', '', 0);
  public detalles: Detalle[];

  public valuadorEstado: boolean = false;
  public semanaEstado: boolean = false;
  public exportadoraEstado: boolean = false;
  public porcentajeHigieneEstado: boolean = false;
  public calificacionEstado: boolean = false;
  public cantidadcajasEstado: boolean = false;

  public cantidadDeCajas: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _evaluadorService: EvaluadorService,
    private _exportadoraService: ExportadorasService,
    private spinner: NgxSpinnerService,
    private _trazabilidadService: TrazabilidadService,
    private _detalleService: DetalleService,
    private toastr: ToastrService,
    private _router: Router,
  ) {
    this._route.params.subscribe((params: Params) => {
      this.idtrazabilidad = params.id;
      this.mostrarOne(this.idtrazabilidad);
      this.getDetalle();
    });
  }

  ngOnInit(): void {
    this.mostrarEvaluador();
    this.getExportadoras();
  }

  irAtras(): void {
    this._router.navigate(['/panel/trazabilidad']);
  }

  actualizar(): void {
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
                this._trazabilidadService.update(this.trazabilidad).subscribe(
                  response => {
                    this.spinner.hide();
                    this.toastr.success('Hecho', 'Registro actualizado correctamente');
                    this.mostrarOne(this.idtrazabilidad);
                  }, error => {
                    this.spinner.hide();
                    console.log(error);
                  }
                )
              }
            }
          }
        }
      }
    }
  }

  getDetalle(): void {
    this._detalleService.getPortrazabilidad(this.idtrazabilidad).subscribe(
      response => {
        this.detalles = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

  getOneDetalle(iddetalle, cajas, observacion): void {
    this.cantidadDeCajas = cajas;
    this.detalle = new Detalle(iddetalle, 0, cajas, '', observacion, 0);
  }

  actualiazarDetalle(): void {
    var resultado = 0;
    if (this.detalle.CANT_CAJAS > this.cantidadDeCajas) {
      resultado = this.detalle.CANT_CAJAS - this.cantidadDeCajas;
      this.actualizarCajas('sumar', resultado);
    } else if (this.detalle.CANT_CAJAS < this.cantidadDeCajas) {
      resultado = this.cantidadDeCajas - this.detalle.CANT_CAJAS;
      this.actualizarCajas('restar', resultado);
    }

    this._detalleService.update(this.detalle.IDDETALLE, this.detalle.CANT_CAJAS, this.detalle.OBSERVACION).subscribe(
      response => {
        this.toastr.success('Hecho', 'Registro guardado correctamente');
        this.getDetalle();
      }, error => {
        console.log(error);
      }
    )

  }

  actualizarCajas(f, resultado): void {
    if (f == 'sumar') {
      this.trazabilidad.CANTIDADCAJAS = +this.trazabilidad.CANTIDADCAJAS + resultado + '';
    } else if (f == 'restar') {
      this.trazabilidad.CANTIDADCAJAS = +this.trazabilidad.CANTIDADCAJAS - resultado + '';
    }
    this._trazabilidadService.actualizarCaja(this.idtrazabilidad, this.trazabilidad.CANTIDADCAJAS).subscribe(
      response => {
      }, error => {
        console.log(error);
      }
    )
  }

  mostrarOne(id): void {
    this.spinner.show();
    this._trazabilidadService.getOne(id).subscribe(
      response => {
        this.spinner.hide();
        this.trazabilidad = response.response;
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

  getExportadoras(): void {
    this._exportadoraService.getAll().subscribe(
      response => {
        this.exportadoras = response.response;
      }, error => {
        console.log(error)
      }
    )
  }

}
