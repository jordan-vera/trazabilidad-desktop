import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url'

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  login(nick, clave): Observable<any> {
    return this._http.get(this.url + 'login/' + nick + '/' + clave);
  }

  cambiarclave(idadmin: number, nick: string, clave: string): Observable<any> {
    let params = JSON.stringify({ idadmin: idadmin, nick: nick, clave: clave });
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'cambiarclave', params, { headers: headers });
  }


}
