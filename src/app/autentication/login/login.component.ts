import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../../services/basedatos.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db:BasedatosService, private router:Router) { }

  ngOnInit(): void {
  }

  // iniciarSesion(){

  //   let rut_usuario:string = (<HTMLInputElement>document.getElementById('rut_usuario')).value
  //   let password:string = (<HTMLInputElement>document.getElementById('password')).value
  //   this.db.userlogin(rut_usuario, password).pipe(first()).subscribe(datos => {
  //     this.router.navigate(['caso'])
  //   }, error => {
  //     alert('Usuario incorrecto')
  //   })
  // }


  iniciarSesion(){
    let rut_usuario:string = (<HTMLInputElement>document.getElementById('rut_usuario')).value
    let password:string = (<HTMLInputElement>document.getElementById('password')).value

    this.db.login(rut_usuario, password).subscribe(datos => {

      if (datos.id_usuario) {
        this.router.navigate(['caso'])
      }
        
    }, error => {
      alert('Usuario incorrecto')
    }
    );


  }

}
