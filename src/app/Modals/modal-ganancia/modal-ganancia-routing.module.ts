import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGananciaPage } from './modal-ganancia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGananciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGananciaPageRoutingModule {}
