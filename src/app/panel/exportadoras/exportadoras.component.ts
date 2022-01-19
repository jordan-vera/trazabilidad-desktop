import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Exportadora } from 'src/app/modelo/Exportadora';
import { ExportadorasService } from 'src/app/servicios/Exportadoras.service';

@Component({
  selector: 'app-exportadoras',
  templateUrl: './exportadoras.component.html',
  styleUrls: ['./exportadoras.component.css']
})
export class ExportadorasComponent implements OnInit {

  public exportadora: Exportadora = new Exportadora(0, '');
  public exportadoraOne: Exportadora = new Exportadora(0, '');
  public exportadoras: Exportadora[];
  public buscadortxt: string = '';

  constructor(
    private _exportadoraService: ExportadorasService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.mostrarExportadoras();
  }

  guardar(): void {
    this._exportadoraService.getNombre(this.exportadora.NOMBRE).subscribe(
      response => {
        if (response.error) {
          this.spinner.show();
          this._exportadoraService.create(this.exportadora).subscribe(
            response => {
              this.spinner.hide();
              this.toastr.success('Hecho', 'Registro guardado correctamente');
              this.limpiarCampos();
              this.mostrarExportadoras();
            }, error => {
              this.spinner.hide();
              console.log(error);
            }
          )
        } else if (response.response) {
          this.toastr.error('Error', 'La exportadora ' + this.exportadora.NOMBRE + ' ya existe!!');
        }
      }, error => {
        console.log(error);
      }
    )
  }

  eliminar(id): void {
    this.spinner.show();
    this._exportadoraService.delete(id).subscribe(
      response => {
        this.toastr.success('Hecho', 'Registro eliminado correctamente!!');
        this.spinner.hide();
        this.mostrarExportadoras();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarOne(id): void {
    this.spinner.show();
    this._exportadoraService.getOne(id).subscribe(
      response => {
        this.spinner.hide();
        this.exportadoraOne = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  actualizar(): void {
    this.spinner.show();
    this._exportadoraService.update(this.exportadoraOne).subscribe(
      response => {
        this.spinner.hide();
        this.toastr.success('Hecho', 'Registro actualizado correctamente!!');
        this.mostrarExportadoras();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarExportadoras(): void {
    this.spinner.show();
    this._exportadoraService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.exportadoras = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  limpiarCampos(): void {
    var dirtyFormID = 'formExportadora';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }

}
