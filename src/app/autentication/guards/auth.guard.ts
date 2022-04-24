import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BasedatosService } from 'src/app/services/basedatos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor(private db: BasedatosService) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean {

    //   if (this.db.auth.id_usuario) {
    //     console.log('si pase');
        
    //     return true;
    //   }
    //   console.log('No pase, bloqueado por el canActive');
      
    // return false;

    return this.db.verificarAuth();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{

    //   if (this.db.auth.id_usuario) {
    //     console.log('si pase');   
    //     return true;
    //   }

    //   console.log('No pase');
      
    // return false;
    return this.db.verificarAuth();
  }
}
