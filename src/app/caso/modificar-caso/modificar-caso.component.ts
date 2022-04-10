import { Component, OnInit } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { ActivatedRoute } from '@angular/router';
import { demanda } from '../../interfaces';

@Component({
  selector: 'app-modificar-caso',
  templateUrl: './modificar-caso.component.html',
  styleUrls: ['./modificar-caso.component.css']
})
export class ModificarCasoComponent implements OnInit {


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
          console.log(this.demandas);
          
        }
      });
    })
  }




}
