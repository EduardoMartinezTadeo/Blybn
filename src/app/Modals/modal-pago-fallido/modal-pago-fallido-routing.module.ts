import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPagoFallidoPage } from './modal-pago-fallido.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPagoFallidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPagoFallidoPageRoutingModule {}
