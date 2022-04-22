import { Component, OnInit } from '@angular/core';
import { comuna, tpDemanda,caso } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { demanda, demandaAgregar } from '../../interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-demanda',
  templateUrl: './crear-demanda.component.html',
  styleUrls: ['./crear-demanda.component.css']
})
export class CrearDemandaComponent implements OnInit {

  tipoDemandas:tpDemanda[]=[];
  comunas:comuna[]=[];
  casos:caso[]=[];

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
  

  constructor(private db: BasedatosService, private router:Router) { }

  ngOnInit(): void {
    this.obtComunas();
    this.obtTpDemandas();
    this.obtCasos();
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

  obtCasos(){
    this.db.getCasos().subscribe(casos => this.casos = casos)
  }

  crearDemanda(){

    let id_tp_demanda:string='';
    let id_comuna_dmdo:string ='';
    let id_comuna_dmte:string ='';
    let fechaDemanda = new Date(this.demanda.fecha_demanda)
    let año:number = fechaDemanda.getFullYear();
    let month:number = fechaDemanda.getMonth()+1;

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
    this.demandaAgregar.fecha_demanda = fechaDemanda.getDate().toString() + '/' + month + '/' + año
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

    console.log(this.demandaAgregar);
    
    if (this.validarDemanda(this.demandaAgregar)) {
      this.db.postDemanda(this.demandaAgregar).subscribe(datos => {
      });  

      Swal.fire({
        icon: 'success',
        title: 'Demanda creada con èxito!!',
      }).then(result=>{
        this.router.navigate(['demanda'])
      })
    }

    else{
      alert('Por favor complete todos los campos')
    }
  }


  validarDemanda(demanda:demandaAgregar):boolean{
    let valido:boolean = true;

    if (demanda.id_demanda == '') {
      valido=false
    }
    else if(demanda.fecha_demanda==''){
      valido=false
    }
    else if(demanda.detalle_demanda==''){
      valido=false
    }
    else if(demanda.caso_id_caso==''){
      valido=false
    }
    else if(demanda.tipo_demanda_id_tp_demanda==''){
      valido=false
    }
    else if(demanda.rut_demandado=='' 
    || demanda.rut_dmte=='' 
    || demanda.nom_demandado ==''
    || demanda.nom_dmte == ''
    || demanda.ape_demandado ==''
    || demanda.ape_dmte ==''
    || demanda.tel_demandado == ''
    || demanda.tel_dmte == ''
    ){
      valido=false
    }

    else if(demanda.id_comuna_dmdo=='' || demanda.id_comuna_dmte == '' ){
      valido=false
    }

    return valido  
  }


}
