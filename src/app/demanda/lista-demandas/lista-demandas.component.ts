import { Component, OnInit } from '@angular/core';
import { demanda } from '../../interfaces';
import { BasedatosService } from '../../services/basedatos.service';

@Component({
  selector: 'app-lista-demandas',
  templateUrl: './lista-demandas.component.html',
  styleUrls: ['./lista-demandas.component.css']
})
export class ListaDemandasComponent implements OnInit {

  demandas:demanda[] = [];

  constructor(private bd: BasedatosService) { }

  ngOnInit(): void {
    this.obtenerDemandas();
  }

  obtenerDemandas(){
    this.bd.getDemandas().subscribe(demandas =>{
      this.demandas = demandas;
    });
  }

}
