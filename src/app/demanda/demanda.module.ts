import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearDemandaComponent } from './crear-demanda/crear-demanda.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearDemandaComponent,
    
  ],
  exports:[
    CrearDemandaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ]
})
export class DemandaModule { }

