import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemandaModule } from './demanda/demanda.module';
import { SharedModule } from './shared/shared.module';
import { AutenticationModule } from './autentication/autentication.module';
import { CasoModule } from './caso/caso.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemandaModule,
    SharedModule,
    AutenticationModule,
    CasoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
