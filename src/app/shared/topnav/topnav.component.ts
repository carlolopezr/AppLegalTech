import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  // user:usuario = this.auth;

  get auth(){
    return this.db.auth
  }

  constructor(private db:BasedatosService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.db.logout();
    this.router.navigate(['/'])
  }

}
