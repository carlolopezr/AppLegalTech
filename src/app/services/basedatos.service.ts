import { demanda } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { comuna, tpDemanda, usuario, casoAgregar, demandaAgregar } from '../interfaces';


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
    return this.http.get<comuna[]>(this.url + 'modulo/comuna/')
  }

  getTipoDemandas(){
    return this.http.get<tpDemanda[]>(this.url + 'modulo/demanda/tipo.php/')
  }

  getUsuario(codigo:number){
    return this.http.get<usuario>(`${this.url}modulo/usuario/usuario.php?codigo=${codigo}` )  
  }

  getAbogados(){
    return this.http.get<usuario[]>(this.url + 'modulo/usuario/abogados.php/')
  }

  getAbogado(id_usuario:number){
    return this.http.get<usuario>(`${this.url} + 'modulo/usuario/abogado.php?id_usuario=${id_usuario}'`)
  }

  agregarCaso(caso:casoAgregar){
    return this.http.post(this.url+'modulo/caso/agregar.php', JSON.stringify(caso));
  }

  postDemanda(demanda: demandaAgregar){
    return this.http.post(this.url +'modulo/demanda/agregar.php', JSON.stringify(demanda))
  }

}
