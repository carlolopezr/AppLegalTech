import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCasosComponent } from './lista-casos/lista-casos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CrearCasoComponent } from './crear-caso/crear-caso.component';
import { RouterModule} from '@angular/router';
import { ModificarCasoComponent } from './modificar-caso/modificar-caso.component';



@NgModule({
  declarations: [
    ListaCasosComponent,
    CrearCasoComponent,
    ModificarCasoComponent,
  ],
  exports:[
    ListaCasosComponent,
    CrearCasoComponent,
    ModificarCasoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class CasoModule { }
