import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdFormComponent } from './md-form/md-form.component';

const routes: Routes = [
  { path: 'meusdados/form' , component: MdFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusdadosRoutingModule { }
