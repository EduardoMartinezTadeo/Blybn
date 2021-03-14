import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPropiedad2Page } from './registrar-propiedad2.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPropiedad2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPropiedad2PageRoutingModule {}
