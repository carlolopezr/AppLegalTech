import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autentication/login/login.component';
import { ListaCasosComponent } from './caso/lista-casos/lista-casos.component';
import { CrearCasoComponent } from './caso/crear-caso/crear-caso.component';
import { ListaDemandasComponent } from './demanda/lista-demandas/lista-demandas.component';
import { CrearDemandaComponent } from './demanda/crear-demanda/crear-demanda.component';
import { ModificarCasoComponent } from './caso/modificar-caso/modificar-caso.component';


const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'caso',
    component:ListaCasosComponent
  },
  {
    path:'crearcaso',
    component:CrearCasoComponent
  },
  {
    path: 'demanda',
    component:ListaDemandasComponent
  },
  {
    path: 'creardemanda',
    component:CrearDemandaComponent
  },
  {
    path: 'modificar-caso/:id',
    component: ModificarCasoComponent
  },
  {
    path:'**',
    redirectTo:'',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
