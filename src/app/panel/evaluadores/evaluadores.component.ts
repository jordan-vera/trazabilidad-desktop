import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Evaluador } from 'src/app/modelo/Evaluador';
import { EvaluadorService } from 'src/app/servicios/Evaluador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-evaluadores',
  templateUrl: './evaluadores.component.html',
  styleUrls: ['./evaluadores.component.css']
})
export class EvaluadoresComponent implements OnInit {

  public evaluador: Evaluador = new Evaluador(0, '', '', '');
  public evaluadorOne: Evaluador = new Evaluador(0, '', '', '');
  public evaluadores: Evaluador[];
  public busquedatxt: string = '';

  constructor(
    private _evaluadorService: EvaluadorService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.mostrarAll();
  }

  guardarEvaluador(): void {
    this._evaluadorService.getcedula(this.evaluador.CEDULA).subscribe(
      response => {
        if (response.error) {
          this.spinner.show();
          this._evaluadorService.create(this.evaluador).subscribe(
            response => {
              this.spinner.hide();
              this.toastr.success('Hecho', 'Registro guardado correctamente');
              this.mostrarAll();
              this.limpiarCampos();
            }, error => {
              console.log(error);
              this.spinner.hide();
            }
          )
        } else if(response.response) {
          this.toastr.error("Error", 'El Evaluador ya existe!!')
        }
      }, error => {
        console.log(error);
      }
    )


  }

  limpiarCampos(): void {
    var dirtyFormID = 'formEvaluador';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }


  mostrarAll(): void {
    this.spinner.show();
    this._evaluadorService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.evaluadores = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  mostrarOne(id): void {
    this.spinner.show();
    this._evaluadorService.getOne(id).subscribe(
      response => {
        this.spinner.hide();
        this.evaluadorOne = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  actualizar(): void {
    this.spinner.show();
    this._evaluadorService.update(this.evaluadorOne).subscribe(
      response => {
        this.spinner.hide();
        this.toastr.success('Hecho', 'Registro actualizado correctamente');
        this.mostrarAll();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  eliminar(id): void {
    this.spinner.show();
    this._evaluadorService.delete(id).subscribe(
      response => {
        this.spinner.hide();
        this.toastr.success('Hecho', 'Registro eliminado correctamente');
        this.mostrarAll();
      }, error => {
        this.spinner.hide();
        console.log(error);
        this.toastr.error("No se puede eliminar porque este evaluador es utilizado en un registro de trazabilidad");
      }
    )
  }

}
