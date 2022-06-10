import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColFormComponent } from './col-form/col-form.component';
import { ColListComponent } from './col-list/col-list.component';

const routes: Routes = [
  { path: 'colaborador/list' , component: ColListComponent },
  { path: 'colaborador/form' , component: ColFormComponent },
  { path: 'colaborador/form/:id' , component: ColFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
