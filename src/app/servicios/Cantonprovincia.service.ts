import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url';

@Injectable({
  providedIn: 'root'
})
export class CantonprovinciaService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAllprovincias(): Observable<any> {
    return this._http.get(this.url + 'provincias');
  }

  getCantones(idprovincia): Observable<any> {
    return this._http.get(this.url + 'cantones/' + idprovincia);
  }

}