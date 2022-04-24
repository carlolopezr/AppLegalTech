import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCasosComponent } from './lista-casos/lista-casos.component';
import { CrearCasoComponent } from './crear-caso/crear-caso.component';
import { ModificarCasoComponent } from './modificar-caso/modificar-caso.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'caso',
        component: ListaCasosComponent 
      },
      {
        path: 'crearcaso',
        component: CrearCasoComponent
      },
      {
        path: 'modificar-caso/:id',
        component: ModificarCasoComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CasoRoutingModule { }