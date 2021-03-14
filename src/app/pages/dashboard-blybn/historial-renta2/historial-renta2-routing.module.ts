import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialRenta2Page } from './historial-renta2.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialRenta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialRenta2PageRoutingModule {}
