import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(
    private _route: ActivatedRoute,
    private _evaluadorService: EvaluadorService,
    private _exportadoraService: ExportadorasService,
    private spinner: NgxSpinnerService,
    private _trazabilidadService: TrazabilidadService,
    private _detalleService: DetalleService
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

  getDetalle(): void {
    this._detalleService.getPortrazabilidad(this.idtrazabilidad).subscribe(
      response => {
        this.detalles = response.response;
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
