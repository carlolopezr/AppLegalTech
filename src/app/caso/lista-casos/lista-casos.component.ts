import { Component, OnInit } from '@angular/core';
import { caso } from '../../interfaces';

@Component({
  selector: 'app-lista-casos',
  templateUrl: './lista-casos.component.html',
  styleUrls: ['./lista-casos.component.css']
})
export class ListaCasosComponent implements OnInit {


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


  obtenerCaso( id:string ):caso {
     this.casos.forEach(caso => {
        if (caso.id===id) {
          this.caso = caso;
          // console.log(this.caso);
          return this.caso       
        }
        return this.caso
    });
    return this.caso;
    
  }

  cambiarEstado( id : string ){
    this.obtenerCaso(id);
    if (this.caso.estado=='Activo') {
      this.caso.estado = 'Inactivo'
    }
    else{
      this.caso.estado = 'Activo'
    }
    
  }


  
  
  

}
