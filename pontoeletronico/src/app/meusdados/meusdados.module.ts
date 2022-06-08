import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdFormComponent } from './md-form/md-form.component';
import { FormsModule } from '@angular/forms';
import { MeusdadosRoutingModule } from './meusdados-routing.module';


@NgModule({
  declarations: [
    MdFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MeusdadosRoutingModule
  ],
  exports: [
    MdFormComponent
  ]
})
export class MeusdadosModule { }
