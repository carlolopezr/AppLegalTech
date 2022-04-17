import { Component, OnInit } from '@angular/core';
import { caso } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';
import { ActivatedRoute } from '@angular/router';
import { demanda, tpDemanda, comuna, usuario, estado, casoModificar } from '../../interfaces';

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

  modificarDemanda(){
    
  }

}

