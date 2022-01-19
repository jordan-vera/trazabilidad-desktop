import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrazabilidadComponent } from './trazabilidad.component';

const routes: Routes = [
  {
    path: '',
    component: TrazabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrazabilidadRoutingModule { }
