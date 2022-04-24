import { demanda } from './../interfaces';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { caso } from 'src/app/interfaces';
import { comuna, tpDemanda, usuario, casoAgregar, demandaAgregar, casoModificar, demandaModificar } from '../interfaces';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  url = 'http://localhost/'

  private _auth: usuario | undefined;

  get auth() :usuario{
    return {...this._auth!}
  }
  

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

  getUsuario(codigo:string | undefined){
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

  login(rut_usuario:string, password:string){ 
    return this.http.get<usuario>(`${this.url}modulo/usuario/login.php?rut_usuario=${rut_usuario}&password=${password}`)
    .pipe( 
      tap( resp => {
        this._auth = resp
        console.log(this._auth);
        localStorage.setItem('token', resp.id_usuario.toString())   
      } )   
    )
  }

  logout(){
    localStorage.removeItem('token')
    this._auth = undefined;
  }

  verificarAuth():Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    let id_usuario = (localStorage.getItem('token')?.toString())
    

    return this.getUsuario(id_usuario)
      .pipe(
        map( auth => {
          this._auth = auth
          return true
        })
      )
  }
}

