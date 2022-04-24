import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearDemandaComponent } from './crear-demanda/crear-demanda.component';
import { ListaDemandasComponent } from './lista-demandas/lista-demandas.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'demanda',
        component:ListaDemandasComponent
      },
      {
        path: 'creardemanda',
        component:CrearDemandaComponent
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
export class DemandaRoutingModule { }