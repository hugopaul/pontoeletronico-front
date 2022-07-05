import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuslancamentosRoutingModule } from './meuslancamentos-routing.module';
import { MlListComponent } from './ml-list/ml-list.component';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { OrderModule } from 'ngx-order-pipe';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    MlListComponent
  ],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
    CommonModule,
    MeuslancamentosRoutingModule,
    FormsModule,
    OrderModule
  ],
  exports: [
    MlListComponent
  ]
})
export class MeuslancamentosModule { }
