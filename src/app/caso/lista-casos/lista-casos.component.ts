import { Component, OnInit } from '@angular/core';
import { caso } from '../../interfaces';

@Component({
  selector: 'app-lista-casos',
  templateUrl: './lista-casos.component.html',
  styleUrls: ['./lista-casos.component.css']
})
export class ListaCasosComponent implements OnInit {

  casos:caso[] = [
    {
      id:'123123',
      fecha:'123123',
      abogado:'asadasd',
      seguimiento:'asdasd',
      estado:'asdasd'
    },
    {
      id:'123123',
      fecha:'123123',
      abogado:'asi123123asd',
      seguimiento:'asdasgxgsdasd',
      estado:'asd124124asd'
    },
    {
      id:'123123',
      fecha:'123123',
      abogado:'aaaaaaaaa',
      seguimiento:'asaaaaaa',
      estado:'asaaaaaa'
    },
    {
      id:'123123',
      fecha:'123123',
      abogado:'asahjgjghjghjdasd',
      seguimiento:'asghjghjghjghjdasd',
      estado:'asdaghjghjsd'
    },
    {
      id:'123123',
      fecha:'123123',
      abogado:'asadasd',
      seguimiento:'asdasd',
      estado:'asdasd'
    },

  ];

  constructor() { }

  // vista: boolean = false;

//   showDialog(CasoModule) {
//     this.vista = true;
// }   


  ngOnInit(): void {
  }

  

}
