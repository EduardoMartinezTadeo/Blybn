import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPropiedadPage } from './registrar-propiedad.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPropiedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPropiedadPageRoutingModule {}
