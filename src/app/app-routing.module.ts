import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autentication/login/login.component';
import { ListaCasosComponent } from './caso/lista-casos/lista-casos.component';
import { CrearCasoComponent } from './caso/crear-caso/crear-caso.component';


const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'casos',
    component:ListaCasosComponent
  },
  {
    path:'crearcaso',
    component:CrearCasoComponent
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
