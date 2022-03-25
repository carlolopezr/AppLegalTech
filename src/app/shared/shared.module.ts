import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnavComponent } from './topnav/topnav.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    TopnavComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    TopnavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
