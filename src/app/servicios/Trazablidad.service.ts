import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url'
import { Trazabilidad } from '../modelo/Trazabilidad';

@Injectable({
  providedIn: 'root'
})
export class TrazabilidadService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'trazabilidades');
  }

  getOne(id): Observable<any> {
    return this._http.get(this.url + 'trazabilidad/' + id);
  }

  create(data: Trazabilidad): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'trazabilidad', params, { headers: headers });
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'trazabilidaddelete/' + id);
  }

  update(data: Trazabilidad): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'trazabilidadupdate', params, { headers: headers });
  }

}