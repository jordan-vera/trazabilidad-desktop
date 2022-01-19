import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url';
import { Exportadora } from '../modelo/Exportadora';

@Injectable({
  providedIn: 'root'
})
export class ExportadorasService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'exportadoras');
  }

  getOne(id): Observable<any> {
    return this._http.get(this.url + 'exportadora/' + id);
  }

  getNombre(nombre): Observable<any> {
    return this._http.get(this.url + 'exportadora-nombre/' + encodeURIComponent(nombre));
  }

  create(data: Exportadora): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'exportadora', params, { headers: headers });
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'exportadoradelete/' + id);
  }

  update(data: Exportadora): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'exportadoraupdate', params, { headers: headers });
  }

}