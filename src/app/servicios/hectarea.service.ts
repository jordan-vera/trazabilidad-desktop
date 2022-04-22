import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url';
import { Hectarea } from '../modelo/Hectarea';

@Injectable({
  providedIn: 'root'
})
export class HectareaService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'hectareas');
  }

  create(data: Hectarea): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'hectarea', params, { headers: headers });
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'hectareasdelete/' + id);
  }

}