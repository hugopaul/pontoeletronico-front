import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColListComponent } from './col-list/col-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ColFormComponent } from './col-form/col-form.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ColListComponent,
    ColFormComponent
  ],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
    CommonModule,
    ColaboradoresRoutingModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ColListComponent
  ]
})
export class ColaboradoresModule { }
