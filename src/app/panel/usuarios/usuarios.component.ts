import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/modelo/Administrador';
import { AdministradorService } from 'src/app/servicios/Administrador.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public admin: Administrador = new Administrador(0,'','','','');
  public administradores: Administrador[];

  constructor(
    private _adminService: AdministradorService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  eliminar(idadmin): void {
    this.spinner.show();
    this._adminService.delete(idadmin).subscribe(
      response => {
        this.spinner.hide();
        this.getAll();
        this.toastr.success('Hecho', 'Registro eliminado correctamente');
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  guardar(): void {
    this.spinner.show();
    this._adminService.create(this.admin).subscribe(
      response => {
        this.spinner.hide();
        this.getAll();
        this.toastr.success('Hecho', 'Registro guardado correctamente');
        this.limpiarCampos();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  limpiarCampos(): void {
    var dirtyFormID = 'formUser';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }

  getAll(): void {
    this.spinner.show();
    this._adminService.geall().subscribe(
      response => {
        this.spinner.hide();
        this.administradores = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
