import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluadoresComponent } from './evaluadores.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluadoresRoutingModule { }
