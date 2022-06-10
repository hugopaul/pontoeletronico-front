import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontoRoutingModule } from './ponto-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    PontoRoutingModule,
    FormsModule
  ],
  exports: [
    RegistroComponent
  ]
})
export class PontoModule { }
