import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url';
import { Detalle } from '../modelo/Detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'detalles');
  }

  getPortrazabilidad(IDTRAZABILIDAD): Observable<any> {
    return this._http.get(this.url + 'detalles-tra/' + IDTRAZABILIDAD);
  }

  create(data: Detalle): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'detalle', params, { headers: headers });
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'detalledelete/' + id);
  }

  deleteall(IDTRAZABILIDAD): Observable<any> {
    return this._http.get(this.url + 'detalledelete-all/' + IDTRAZABILIDAD);
  }

}