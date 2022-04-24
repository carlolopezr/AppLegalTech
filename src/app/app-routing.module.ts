import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './autentication/guards/auth.guard';


const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('./autentication/autentication.module').then( m => m.AutenticationModule),
    pathMatch: 'full'
  },
  {
    path:'',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./caso/caso.module').then(m => m.CasoModule)
    
  },
  {
    path: '',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./demanda/demanda.module').then(m => m.DemandaModule)
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
