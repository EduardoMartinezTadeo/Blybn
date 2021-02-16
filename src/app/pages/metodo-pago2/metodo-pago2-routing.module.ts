import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodoPago2Page } from './metodo-pago2.page';

const routes: Routes = [
  {
    path: '',
    component: MetodoPago2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodoPago2PageRoutingModule {}
