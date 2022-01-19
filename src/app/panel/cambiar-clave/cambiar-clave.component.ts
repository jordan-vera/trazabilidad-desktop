import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from 'src/app/servicios/Administrador.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  public nick: string = '';
  public clave1: string = '';
  public clave2: string = '';

  constructor(
    private _adminService: AdministradorService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.nick = 'admin'
   }

  ngOnInit(): void {
  }

  login(): void {
    this.spinner.show();
    if (this.clave1 != '' && this.clave2 != '') {
      alert(this.nick + ' ' + this.clave1)
      this._adminService.login(this.nick, this.clave1).subscribe(
        response => {
          this.spinner.hide();
          if (response.response) {
            this.cambiarClave();
          } else {
            this.toastr.warning('Error', 'Contraseña incorrecta');
          }
        }, error => {
          this.spinner.hide();
          console.log(error);
        }
      )
    } else {
      this.spinner.hide();
      this.toastr.warning('Error', 'Campos vacios');
    }
  }

  cambiarClave(): void {
    this._adminService.cambiarclave(1, this.nick, this.clave2).subscribe(
      response => {
        this.toastr.success('Hecho', 'Clave actualizada');
        this.clave1 = '';
        this.clave2 = '';
      }, error => {
        console.log(error);
      }
    )
  }

}
