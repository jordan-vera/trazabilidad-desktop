import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./trazabilidad/trazabilidad.module").then(m => m.TrazabilidadModule)
      },
      {
        path: "trazabilidad",
        loadChildren: () => import("./trazabilidad/trazabilidad.module").then(m => m.TrazabilidadModule)
      },
      {
        path: "evaluadores",
        loadChildren: () => import("./evaluadores/evaluadores.module").then(m => m.EvaluadoresModule)
      },
      {
        path: "exportadoras",
        loadChildren: () => import("./exportadoras/exportadoras.module").then(m => m.ExportadorasModule)
      },
      {
        path: "lotes",
        loadChildren: () => import("./lotes/lotes.module").then(m => m.LotesModule)
      },
      {
        path: "edit-trazabilidad/:id",
        loadChildren: () => import("./edit-trazabilidad/edit-trazabilidad.module").then(m => m.EditTrazabilidadModule)
      },
      {
        path: 'cambiar-clave',
        component: CambiarClaveComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
