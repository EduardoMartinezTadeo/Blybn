import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBusquedaSimplePage } from './modal-busqueda-simple.page';
import { CalendarModule } from 'ion2-calendar';
const routes: Routes = [
  {
    path: '',
    component: ModalBusquedaSimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBusquedaSimplePageRoutingModule {}
