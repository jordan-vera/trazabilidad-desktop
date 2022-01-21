import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTrazabilidadComponent } from './edit-trazabilidad.component';

const routes: Routes = [
  {
    path: '',
    component: EditTrazabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTrazabilidadRoutingModule { }
