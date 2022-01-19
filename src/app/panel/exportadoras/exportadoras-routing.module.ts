import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportadorasComponent } from './exportadoras.component';

const routes: Routes = [
  {
    path: '',
    component: ExportadorasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportadorasRoutingModule { }
