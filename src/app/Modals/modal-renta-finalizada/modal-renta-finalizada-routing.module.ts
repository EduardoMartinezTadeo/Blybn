import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRentaFinalizadaPage } from './modal-renta-finalizada.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRentaFinalizadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRentaFinalizadaPageRoutingModule {}
