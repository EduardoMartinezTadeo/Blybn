import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHistorialPage } from './modal-historial.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHistorialPageRoutingModule {}
