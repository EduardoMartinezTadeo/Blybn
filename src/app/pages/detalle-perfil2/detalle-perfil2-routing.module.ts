import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePerfil2Page } from './detalle-perfil2.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePerfil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePerfil2PageRoutingModule {}
