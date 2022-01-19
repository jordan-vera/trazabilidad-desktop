import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdministradorService } from '../servicios/Administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public nick: string = '';
  public clave: string = '';
  public credencialesEstado: boolean = true;

  constructor(
    private _adminService: AdministradorService,
    private _router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.spinner.show();
    if (this.nick != '' && this.clave != '') {
      this._adminService.login(this.nick, this.clave).subscribe(
        response => {
          this.spinner.hide();
          if (response.response) {
            this.credencialesEstado = true;
            localStorage.setItem("nick", this.nick);
            this._router.navigate(['/panel']);
          } else {
            this.credencialesEstado = false;
          }
        }, error => {
          this.spinner.hide();
          console.log(error);
        }
      )
    } else {
      this.spinner.hide();
    }
  }

}
