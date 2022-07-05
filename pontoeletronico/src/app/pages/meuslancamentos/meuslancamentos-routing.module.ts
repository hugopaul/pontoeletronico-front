import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MlListComponent } from './ml-list/ml-list.component';

const routes: Routes = [
  { path: 'meuslancamentos/list' , component: MlListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeuslancamentosRoutingModule { }
