import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBusquedaPage } from './modal-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBusquedaPageRoutingModule {}
