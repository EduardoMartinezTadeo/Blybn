import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBusquedaErrorPage } from './modal-busqueda-error.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBusquedaErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBusquedaErrorPageRoutingModule {}
