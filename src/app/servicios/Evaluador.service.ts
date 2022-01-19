import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url'
import { Evaluador } from '../modelo/Evaluador';

@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'evaluadores');
  }

  getOne(IDEVALUADOR): Observable<any> {
    return this._http.get(this.url + 'evaluador/' + IDEVALUADOR);
  }

  getcedula(CEDULA): Observable<any> {
    return this._http.get(this.url + 'evaluador-cedula/' + CEDULA);
  }

  create(data: Evaluador): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'eval', params, { headers: headers });
  }

  delete(IDEVALUADOR): Observable<any> {
    return this._http.get(this.url + 'eva/' + IDEVALUADOR);
  }

  update(data: Evaluador): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'upevaluador', params, { headers: headers });
  }

}