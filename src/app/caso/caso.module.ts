import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCasosComponent } from './lista-casos/lista-casos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CrearCasoComponent } from './crear-caso/crear-caso.component';
import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ListaCasosComponent,
    CrearCasoComponent
  ],
  exports:[
    ListaCasosComponent,
    CrearCasoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class CasoModule { }
