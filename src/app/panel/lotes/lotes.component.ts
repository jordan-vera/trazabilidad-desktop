import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Lote } from 'src/app/modelo/Lote';
import { LoteService } from 'src/app/servicios/Lote.service';

@Component({
  selector: 'app-lotes',
  templateUrl: './lotes.component.html',
  styleUrls: ['./lotes.component.css']
})
export class LotesComponent implements OnInit {

  public lote: Lote = new Lote(0, '', '', null);
  public loteOne: Lote = new Lote(0, '', '', null);
  public buscadortxt: string = '';
  public lotes: Lote[] = [];

  constructor(
    private _loteService: LoteService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.mostrarLotes();
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

  guardar(): void {
    this.spinner.show();
    this._loteService.getNombre(this.lote.NOMBRELOTE).subscribe(
      response => {
        this.spinner.hide();
        if (response.error) {
          this.spinner.show();
          this._loteService.create(this.lote).subscribe(
            response => {
              this.spinner.hide();
              this.mostrarLotes();
              this.toastr.success('Hecho', 'Registro guardado correctamente');
              this.limpiarCampos();
            }, error => {
              this.spinner.hide();
              console.log(error);
            }
          )
        } else if (response.response) {
          this.toastr.error('Error', 'El lote "' + this.lote.NOMBRELOTE + '" ya existe!!');
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  limpiarCampos(): void {
    var dirtyFormID = 'formLote';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }

  eliminar(id): void {
    this.spinner.show();
    this._loteService.delete(id).subscribe(
      response => {
        this.spinner.hide();
        this.toastr.success('Hecho', 'Registro eliminado correctamente');
        this.mostrarLotes();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarOne(id): void {
    this.spinner.show();
    this._loteService.getOne(id).subscribe(
      response => {
        this.loteOne = response.response;
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      }
    )
  }

  actualizar(): void {
    this.spinner.show();
    this._loteService.update(this.loteOne).subscribe(
      response => {
        this.spinner.hide();
        this.toastr.success('Hecho', 'Registro actualizado correctamente');
        this.mostrarLotes();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
