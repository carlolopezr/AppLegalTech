import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearDemandaComponent } from './crear-demanda/crear-demanda.component';



@NgModule({
  declarations: [
    CrearDemandaComponent
  ],
  exports:[
    CrearDemandaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemandaModule { }

