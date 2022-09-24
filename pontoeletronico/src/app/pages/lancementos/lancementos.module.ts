import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancementosRoutingModule } from './lancementos-routing.module';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    LancementosRoutingModule,
    NgxMaskModule.forRoot( maskConfig ),
    FormsModule,
    OrderModule
  ],
  exports: [
    LancamentosComponent
  ]
})
export class LancementosModule { }
