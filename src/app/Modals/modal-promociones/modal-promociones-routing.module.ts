import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPromocionesPage } from './modal-promociones.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPromocionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPromocionesPageRoutingModule {}
