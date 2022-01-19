import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url';
import { Lote } from '../modelo/Lote';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'lotes');
  }

  getOne(id): Observable<any> {
    return this._http.get(this.url + 'lote/' + id);
  }

  getNombre(nombre): Observable<any> {
    return this._http.get(this.url + 'lote-nombre/' + nombre);
  }

  create(data: Lote): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'lote', params, { headers: headers });
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'lotedelete/' + id);
  }

  update(data: Lote): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'loteupdate', params, { headers: headers });
  }

}