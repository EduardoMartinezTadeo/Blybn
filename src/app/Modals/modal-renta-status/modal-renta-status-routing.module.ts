import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRentaStatusPage } from './modal-renta-status.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRentaStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRentaStatusPageRoutingModule {}
