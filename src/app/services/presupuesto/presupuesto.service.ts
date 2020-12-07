import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor(private http: HttpClient) { }


  public getData() {
    // return this.http.get(environment.baseUrl + environment.apiPresupuesto.getData);
    return this.http.get('./assets/data/presupuesto.json');


  }
}
