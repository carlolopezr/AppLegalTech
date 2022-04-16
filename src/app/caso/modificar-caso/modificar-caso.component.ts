import { Component, OnInit } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { ActivatedRoute } from '@angular/router';
import { demanda, tpDemanda, comuna, usuario, estado } from '../../interfaces';

@Component({
  selector: 'app-modificar-caso',
  templateUrl: './modificar-caso.component.html',
  styleUrls: ['./modificar-caso.component.css']
})
export class ModificarCasoComponent implements OnInit {

  seguimientos = ['Ingresando Demanda', 'Contestación', 'Decisión','Apelación','Ejecución', 'En camino'];
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


  // usuario:usuario={
  //   id_usuario:0,
  //   rut_usuario:'',
  //   nombre_usuario:'',
  //   rol_id_rol:0
  // }

  comunas:comuna[]=[];
  tpDemandas:tpDemanda[]=[]
  demandas:demanda[]=[];
  casos: caso[] = [];
  caso: caso = {
    id_caso: '',
    fecha_caso: '',
    nombre_usuario: '',
    seguimiento: '',
    detalle_caso:'',
    estado:''
  };

  constructor(private db: BasedatosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // Obtener casos
    this.db.getCasos().subscribe((casos) => {
      this.casos = casos;
      this.activatedRoute.params
        .subscribe(({ id }) => {
          this.casos.forEach(caso => {
            if (caso.id_caso == id) {
              this.caso = caso;
              this.obtDemandas();
              this.obtComunas();  
              this.obtTpDemandas();
              // this.obtAbogado();                    
            }
          });
        })
    })


  }

  obtDemandas(){
    this.db.getDemandas().subscribe(demandas => {
      demandas.forEach(demanda => {
        if (demanda.caso_id_caso.toString() == this.caso.id_caso) {
          this.demandas.push(demanda)  
          // console.log(this.demandas);
          
        }
      });
    })
  }

  obtComunas(){
    this.db.getComunas().subscribe(comunas => {
      this.comunas = comunas
      console.log(this.comunas);
      
    })
  }

  obtTpDemandas(){
    this.db.getTipoDemandas().subscribe(tpDemandas => {
      this.tpDemandas = tpDemandas
      console.log(this.tpDemandas);
      
    })
  }

  // obtAbogado(){
  //   this.db.getUsuario(1).subscribe(usuario =>{
  //     console.log(usuario);     
  //   })
  // }

}
