import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearDemandaComponent } from './crear-demanda/crear-demanda.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListaDemandasComponent } from './lista-demandas/lista-demandas.component';


@NgModule({
  declarations: [
    CrearDemandaComponent,
    ListaDemandasComponent,
    
  ],
  exports:[
    CrearDemandaComponent,
    ListaDemandasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ]
})
export class DemandaModule { }

