import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mensajes2Page } from './mensajes2.page';

const routes: Routes = [
  {
    path: '',
    component: Mensajes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mensajes2PageRoutingModule {}
