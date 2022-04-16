import { Component, OnInit } from '@angular/core';
import { estado, usuario,tpDemanda, caso, casoAgregar  } from 'src/app/interfaces';
import { BasedatosService } from '../../services/basedatos.service';


@Component({
  selector: 'app-crear-caso',
  templateUrl: './crear-caso.component.html',
  styleUrls: ['./crear-caso.component.css']
})
export class CrearCasoComponent implements OnInit {

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

  tipoDemandas:tpDemanda[]=[];
  abogados:usuario[]=[];

  casoUsuario:caso= {
    id_caso: '',
    fecha_caso:'',
    seguimiento:'',
    detalle_caso:'',
    estado:'',
    nombre_usuario:'',
  };

  caso:casoAgregar= {
    id_caso: '',
    fecha_caso:'',
    seguimiento:'',
    detalle_caso:'',
    estado:'',
    usuario_id_usuario:'',
  }

  constructor(private db: BasedatosService) { }

  ngOnInit(): void {
    this.obtAbogados();
    this.obtTpDemandas();
  }

  obtAbogados(){
    this.db.getAbogados().subscribe(abogados => {
      this.abogados = abogados;
    })
  }

  obtTpDemandas(){
    this.db.getTipoDemandas().subscribe(tpDemandas =>{
      this.tipoDemandas = tpDemandas;
    })
  }

  crearCaso(){
    let fecha = Date.now();
    let hoy = new Date(fecha);
    let id_abogado:number = 0;
    let estadoCaso:number = 0;

    let año:number = hoy.getFullYear();
    let month:number = hoy.getMonth()+1;

    this.estados.forEach(estado => {
      if (this.casoUsuario.estado == estado.desc_estado) {
        estadoCaso = estado.id_estado
      }
    })

    this.abogados.forEach(abogado => {
      if (this.casoUsuario.nombre_usuario == abogado.nombre_usuario) {
        id_abogado = abogado.id_usuario
      }
    });
    
    this.caso.id_caso = this.casoUsuario.id_caso;
    this.caso.fecha_caso = hoy.getDate().toString() + '/' + month + '/' + año;
    this.caso.estado = estadoCaso.toString();
    this.caso.seguimiento = this.casoUsuario.seguimiento;
    this.caso.detalle_caso = this.casoUsuario.detalle_caso;
    this.caso.usuario_id_usuario = id_abogado.toString();

    

    if (this.validarCaso(this.caso)) {   
      this.db.agregarCaso(this.caso).subscribe(datos => {    
      });
    }  
    else{
      alert('Por favor complete los campos')
    }
  }

  validarCaso(caso:casoAgregar):boolean{

    let valido:boolean=true;

    if (caso.id_caso == '') {
      valido=false
    }
    else if(caso.detalle_caso==''){
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


}
