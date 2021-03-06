import { Component, OnInit } from '@angular/core';
import { caso, estado } from '../../interfaces';
import { BasedatosService } from '../../services/basedatos.service';

@Component({
  selector: 'app-lista-casos',
  templateUrl: './lista-casos.component.html',
  styleUrls: ['./lista-casos.component.css']
})
export class ListaCasosComponent implements OnInit {

  estados:estado[]=[
    {
      id_estado:0,
      desc_estado:'Inactivo'
    },
    {
      id_estado:1,
      desc_estado:'Activo'
    }

  ];

  caso:caso = {
    id_caso: '',
    fecha_caso:'',
    nombre_usuario:'',
    seguimiento:'',
    detalle_caso:'',
    estado:''
  }

  casos:caso[]=[];


  constructor(private bd: BasedatosService) { }

  ngOnInit(): void {
    this.obtenerCasos();   
  }

  ngOnDestroy() {
    
  }


  obtenerCasos(){
    this.bd.getCasos().subscribe(casos =>{
      this.casos = casos; 
      // this.casosCopia = [...this.casos] 
      // console.log(this.casosCopia);
    });
  }



  cambiarEstado( id : string ){
    this.casos.forEach(caso => {
        if (caso.id_caso==id) {
            if (caso.estado == '1') {
              caso.estado = '0';
            }
            else{
              caso.estado = '1'
            }
        }
    });
    console.log(this.casos);
  } 
}
