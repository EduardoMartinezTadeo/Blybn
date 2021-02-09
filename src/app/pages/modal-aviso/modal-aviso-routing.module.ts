import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAvisoPage } from './modal-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAvisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAvisoPageRoutingModule {}
