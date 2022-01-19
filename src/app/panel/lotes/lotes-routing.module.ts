import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotesComponent } from './lotes.component';

const routes: Routes = [
  {
    path: '',
    component: LotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotesRoutingModule { }
