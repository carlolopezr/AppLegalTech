import { Component, OnInit } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { ActivatedRoute } from '@angular/router';
import { demanda, tpDemanda, comuna, usuario, estado, casoModificar, demandaModificar } from '../../interfaces';

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

  abogados:usuario[]=[]

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

  casoModificar:casoModificar={
    id_caso:'',
    usuario_id_usuario: '',
    seguimiento: '',
    detalle_caso:'',
    estado:''
  }

  updateDemanda:demandaModificar = {
    id_demanda:0,
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
    caso_id_caso:0,
    id_comuna_dmdo:'',
    id_comuna_dmte:'',
  }



  constructor(private db: BasedatosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.db.getCasos().subscribe((casos) => {
      this.casos = casos;
      this.activatedRoute.params
        .subscribe(({ id }) => {
          this.casos.forEach(caso => {
            if (caso.id_caso == id) {
              
              this.caso = caso;
              this.caso.estado = caso.estado
              this.obtDemandas();
              this.obtComunas();  
              this.obtTpDemandas();  
              this.obtAbogados();               
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
    })
  }

  obtTpDemandas(){
    this.db.getTipoDemandas().subscribe(tpDemandas => {
      this.tpDemandas = tpDemandas    
    })
  }

  obtAbogados(){
    this.db.getAbogados().subscribe(abogados =>{
      this.abogados = abogados
    })  
  }


  modificarCaso(){

    let estadoCaso:number=0;
    let id_abogado:number = 0;

    let estadoInput:string = (<HTMLInputElement>document.getElementById('estado')).value
    let seguimientoInput:string = (<HTMLInputElement>document.getElementById('seguimiento')).value
    

    this.estados.forEach(estado => {
      if (estadoInput == estado.desc_estado) {
        estadoCaso = estado.id_estado
      }
    })

    this.abogados.forEach(abogado => {
      if (this.caso.nombre_usuario == abogado.nombre_usuario) {
        id_abogado = abogado.id_usuario
      }
    });

    this.casoModificar.id_caso = this.caso.id_caso
    this.casoModificar.detalle_caso = this.caso.detalle_caso;
    this.casoModificar.estado = estadoCaso.toString();
    this.casoModificar.usuario_id_usuario = id_abogado.toString();
    this.casoModificar.seguimiento = seguimientoInput

    if (this.validarCaso(this.casoModificar)) {
      this.db.putCaso(this.casoModificar).subscribe(datos => {     
      });
    }
    else{
      alert('Por favor complemente todos los campos')
    }
  }

  validarCaso(caso:casoModificar):boolean{

    let valido:boolean=true;
    if(caso.detalle_caso==''){
      valido=false
    }
    else if(caso.id_caso == ''){
      valido=false
    }
    else if(caso.seguimiento==''){
      valido=false
    }
    else if(caso.estado == ''){
      valido=false
    }
    return valido  
  }

  modificarDemanda(demanda:demanda){

    let id_tp_Dmda:string = '';
    let id_comuna_dmdo:string = '';
    let id_comuna_dmte:string = '';

    let tp_demanda:string = (<HTMLInputElement>document.getElementById('tp_demanda')).value
    let detalle_demanda:string = (<HTMLInputElement>document.getElementById('detalle_demanda')).value
    let rut_dmdo:string = (<HTMLInputElement>document.getElementById('rut_dmdo')).value
    let nom_dmdo:string = (<HTMLInputElement>document.getElementById('nom_dmdo')).value
    let ape_dmdo:string = (<HTMLInputElement>document.getElementById('ape_dmdo')).value
    let tel_dmdo:string = (<HTMLInputElement>document.getElementById('tel_dmdo')).value
    let com_dmdo:string = (<HTMLInputElement>document.getElementById('com_dmdo')).value
    let rut_dmte:string = (<HTMLInputElement>document.getElementById('rut_dmte')).value
    let nom_dmte:string = (<HTMLInputElement>document.getElementById('nom_dmte')).value
    let ape_dmte:string = (<HTMLInputElement>document.getElementById('ape_dmte')).value
    let tel_dmte:string = (<HTMLInputElement>document.getElementById('tel_dmte')).value
    let com_dmte:string = (<HTMLInputElement>document.getElementById('com_dmte')).value

    this.tpDemandas.forEach(tipo =>{
      if (tp_demanda == tipo.desc_tp_demanda) {
        id_tp_Dmda = tipo.id_tp_demanda.toString();
      }
    })

    this.comunas.forEach(comuna => {
      if (com_dmdo == comuna.nom_comuna) {
        id_comuna_dmdo = comuna.id_comuna.toString();
      }
    })

    this.comunas.forEach(comuna => {
      if (com_dmte == comuna.nom_comuna) {
        id_comuna_dmte = comuna.id_comuna.toString();
      }
    })

    this.updateDemanda.id_demanda = demanda.id_demanda;
    this.updateDemanda.detalle_demanda = detalle_demanda;
    this.updateDemanda.rut_demandado = rut_dmdo;
    this.updateDemanda.nom_demandado = nom_dmdo;
    this.updateDemanda.ape_demandado = ape_dmdo;
    this.updateDemanda.tel_demandado = tel_dmdo;
    this.updateDemanda.rut_dmte = rut_dmte;
    this.updateDemanda.nom_dmte = nom_dmte;
    this.updateDemanda.ape_dmte = ape_dmte;
    this.updateDemanda.tel_dmte = tel_dmte;
    this.updateDemanda.tipo_demanda_id_tp_demanda = id_tp_Dmda;
    this.updateDemanda.id_comuna_dmdo = id_comuna_dmdo;
    this.updateDemanda.id_comuna_dmte = id_comuna_dmte;


    if (this.validarDemanda(this.updateDemanda)) {
      this.db.putDemanda(this.updateDemanda).subscribe(datos => {
        console.log(datos);   
      })  
    }
    else{
      alert('Complete todos los campos')
    }
  }

  validarDemanda(demanda:demandaModificar) :boolean{
    let valido:boolean=true;
    if(demanda.detalle_demanda==''){
      valido=false
    }
    else if(demanda.rut_demandado == '' || demanda.rut_dmte == '' 
      || demanda.nom_demandado == '' || demanda.nom_dmte == ''
      || demanda.ape_demandado == '' || demanda.ape_dmte ==''
      || demanda.tel_demandado == '' || demanda.tel_dmte == ''){
      valido=false
    }
    return valido 
  }

}

