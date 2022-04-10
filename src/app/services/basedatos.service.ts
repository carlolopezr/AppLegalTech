import { demanda } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { comuna } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  url = 'http://localhost/'

  constructor(private http: HttpClient) { }

  getCasos(){
    return this.http.get<caso[]>(this.url + 'modulo/caso/');
  }

  getDemandas(){
    return this.http.get<demanda[]>(this.url + 'modulo/demanda/')
  }

  getComunas(){
    return this.http.get<comuna>(this.url + 'modulo/comuna/')
  }

  getTipoDemandas(){
    return this.http.get(this.url + 'modulo/')
  }

}
