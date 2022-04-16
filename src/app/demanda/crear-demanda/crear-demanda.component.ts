import { Component, OnInit } from '@angular/core';
import { comuna, tpDemanda } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { demanda, demandaAgregar } from '../../interfaces';

@Component({
  selector: 'app-crear-demanda',
  templateUrl: './crear-demanda.component.html',
  styleUrls: ['./crear-demanda.component.css']
})
export class CrearDemandaComponent implements OnInit {

  tipoDemandas:tpDemanda[]=[];
  comunas:comuna[]=[];

  demanda:demanda={
    id_demanda:0,
    fecha_demanda:'',
    detalle_demanda:'',
    rut_demandado:'',
    nom_demandado:'',
    ape_demandado:'',
    tel_demandado:'',
    rut_dmte:'',
    nom_dmte:'',
    ape_dmte:'',
    tel_dmte:'',
    desc_tp_demanda:'',
    caso_id_caso:0,
    nom_comuna_dmdo:'',
    nom_comuna_dmte:'',
  }

  demandaAgregar:demandaAgregar={
    id_demanda:'',
    fecha_demanda:'',
    detalle_demanda:'',
    rut_demandado:'',
    nom_demandado:'',
    ape_demandado:'',
    tel_demandado:'',
    rut_dmte:'',
    nom_dmte:'',
    ape_dmte:'',
    tel_dmte:'',
    tipo_demanda_id_tp_demanda:'',
    caso_id_caso:'',
    id_comuna_dmdo:'',
    id_comuna_dmte:'',
  }
  

  constructor(private db: BasedatosService) { }

  ngOnInit(): void {
    this.obtComunas();
    this.obtTpDemandas();
  }

  obtComunas(){
    this.db.getComunas().subscribe(comunas =>{
      this.comunas = comunas
    })
  }

  obtTpDemandas(){
    this.db.getTipoDemandas().subscribe(tpDemandas =>{
      this.tipoDemandas = tpDemandas;
    })
  }

  crearDemanda(){

    let id_tp_demanda:string='';
    let id_comuna_dmdo:string ='';
    let id_comuna_dmte:string ='';

    this.tipoDemandas.forEach(tpDemanda =>{
      if (this.demanda.desc_tp_demanda == tpDemanda.desc_tp_demanda) {
        id_tp_demanda = tpDemanda.id_tp_demanda.toString();
      }
    })

    // comuna demandado
    this.comunas.forEach(comuna =>{
      if (this.demanda.nom_comuna_dmdo == comuna.nom_comuna) {
        id_comuna_dmdo = comuna.id_comuna.toString();
      }
    })

    // comuna demandante
    this.comunas.forEach(comuna =>{
      if (this.demanda.nom_comuna_dmte == comuna.nom_comuna) {
        id_comuna_dmte = comuna.id_comuna.toString();
      }
    })

    this.demandaAgregar.id_demanda = this.demanda.id_demanda.toString();
    this.demandaAgregar.fecha_demanda = this.demanda.fecha_demanda;
    this.demandaAgregar.detalle_demanda = this.demanda.detalle_demanda;
    this.demandaAgregar.rut_demandado = this.demanda.rut_demandado;
    this.demandaAgregar.nom_demandado = this.demanda.nom_demandado;
    this.demandaAgregar.ape_demandado = this.demanda.ape_demandado;
    this.demandaAgregar.tel_demandado = this.demanda.tel_demandado;
    this.demandaAgregar.rut_dmte = this.demanda.rut_dmte;
    this.demandaAgregar.nom_dmte = this.demanda.nom_dmte;
    this.demandaAgregar.ape_dmte = this.demanda.ape_dmte;
    this.demandaAgregar.tel_dmte = this.demanda.tel_dmte;
    this.demandaAgregar.tipo_demanda_id_tp_demanda = id_tp_demanda;
    this.demandaAgregar.caso_id_caso = this.demanda.caso_id_caso.toString();
    this.demandaAgregar.id_comuna_dmdo = id_comuna_dmdo;
    this.demandaAgregar.id_comuna_dmte = id_comuna_dmte;
    this.demandaAgregar.caso_id_caso = '123';

    console.log(this.demandaAgregar);
    
    
    this.db.postDemanda(this.demandaAgregar).subscribe(datos => {

    });

    

       
  }



}
