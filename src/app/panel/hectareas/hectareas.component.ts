import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Hectarea } from 'src/app/modelo/Hectarea';
import { Lote } from 'src/app/modelo/Lote';
import { HectareaService } from 'src/app/servicios/hectarea.service';
import { LoteService } from 'src/app/servicios/Lote.service';

@Component({
  selector: 'app-hectareas',
  templateUrl: './hectareas.component.html',
  styleUrls: ['./hectareas.component.css']
})
export class HectareasComponent implements OnInit {

  public lotes: Lote[] = [];
  public hectarea: Hectarea = new Hectarea(0, '', 0);
  public buscadortxt: string = '';
  public hectareas: Hectarea[] = [];

  constructor(
    private _loteService: LoteService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _hectareaService: HectareaService
  ) { }

  ngOnInit(): void {
    this.mostrarLotes();
    this.mostrarHectareas();
  }

  mostrarHectareas(): void {
    this.spinner.show();
    this._hectareaService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.hectareas = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error)
      }
    )
  }

  guardar(): void {
    this.spinner.show();
    this._hectareaService.create(this.hectarea).subscribe(
      response => {
        this.spinner.hide();
        this.mostrarHectareas();
        this.toastr.success('Hecho', 'Registro guardado correctamente');
        this.limpiarCampos();
      }, error => {
        this.spinner.hide();
        console.log(error)
      }
    )
  }

  limpiarCampos(): void {
    var dirtyFormID = 'formHecta';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }

  eliminar(id): void {
    this.spinner.show();
    this._hectareaService.delete(id).subscribe(
      response => {
        this.spinner.hide();
        this.mostrarHectareas();
        this.toastr.success('Hecho', 'Registro guardado correctamente');
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarLotes(): void {
    this.spinner.show();
    this._loteService.getAll().subscribe(
      response => {
        this.lotes = response.response;
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      }
    )
  }


}
