import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialRentaPage } from './historial-renta.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialRentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialRentaPageRoutingModule {}
