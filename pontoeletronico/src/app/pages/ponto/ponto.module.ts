import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontoRoutingModule } from './ponto-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { SafePipe } from 'src/app/core/safe.pipe';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { OrderModule } from 'ngx-order-pipe';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
    CommonModule,
    PontoRoutingModule,
    FormsModule,
    OrderModule
  ],
  exports: [
    RegistroComponent
  ]
})
export class PontoModule { }
