import { demanda } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { comuna, tpDemanda, usuario, casoAgregar, demandaAgregar, casoModificar, demandaModificar, login } from '../interfaces';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  url = 'http://localhost/'
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

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

  putCaso(caso:casoModificar){
    return this.http.put(this.url +`modulo/caso/update.php?id_caso=${caso.id_caso}`, JSON.stringify(caso))
  }

  putDemanda(demanda:demandaModificar){
    return this.http.put(this.url +`modulo/demanda/update.php?id_demanda=${demanda.id_demanda}`, JSON.stringify(demanda))
  }

  deleteDemanda(codigo:string){
    return this.http.delete(this.url+`modulo/demanda/eliminar.php?id_demanda=${codigo}`)
  }

  userlogin(rut_usuario:string, password:string) {
    //alert(username) //aparece el usuario de la persona que metio los datos
    return this.http.post<login[]>(this.url + 'modulo/usuario/login.php', { rut_usuario, password })
    .pipe(map(users => {
    this.setToken(users[0].rut_usuario);
    this.getLoggedInName.emit(true);
    return users;
    }));
    }
  
    setToken(token: string) {
      localStorage.setItem('token', token);
      }
      getToken() {
      return localStorage.getItem('token');
      }
      deleteToken() {
      localStorage.removeItem('token');
      }
      isLoggedIn() {
      const usertoken = this.getToken();
      if (usertoken != null) {
      return true
      }
      return false;
      }
}

