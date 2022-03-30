import { Component, OnInit } from '@angular/core';
import { caso } from 'src/app/interfaces';

@Component({
  selector: 'app-lista-demandas',
  templateUrl: './lista-demandas.component.html',
  styleUrls: ['./lista-demandas.component.css']
})
export class ListaDemandasComponent implements OnInit {

  caso:caso = {
    id:'',
    fecha:'',
    abogado:'',
    seguimiento:'',
    estado:''
  }

  casos:caso[] = [
    {
      id:'1',
      fecha:'123123',
      abogado:'asadasd',
      seguimiento:'asdasd',
      estado:'Inactivo'
    },
    {
      id:'2',
      fecha:'123123',
      abogado:'asi123123asd',
      seguimiento:'asdasgxgsdasd',
      estado:'Inactivo'
    },
    {
      id:'3',
      fecha:'123123',
      abogado:'aaaaaaaaa',
      seguimiento:'asaaaaaa',
      estado:'Activo'
    },
    {
      id:'4',
      fecha:'123123',
      abogado:'asahjgjghjghjdasd',
      seguimiento:'asghjghjghjghjdasd',
      estado:'Activo'
    },
    {
      id:'5',
      fecha:'123123',
      abogado:'asadasd',
      seguimiento:'asdasd',
      estado:'Activo'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
