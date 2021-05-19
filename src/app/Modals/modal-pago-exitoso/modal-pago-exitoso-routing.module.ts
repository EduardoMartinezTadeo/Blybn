import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPagoExitosoPage } from './modal-pago-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPagoExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPagoExitosoPageRoutingModule {}
