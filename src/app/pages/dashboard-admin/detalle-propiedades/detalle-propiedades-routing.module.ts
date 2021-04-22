import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePropiedadesPage } from './detalle-propiedades.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePropiedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePropiedadesPageRoutingModule {}
