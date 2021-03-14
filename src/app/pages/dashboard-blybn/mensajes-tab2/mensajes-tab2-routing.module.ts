import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesTab2Page } from './mensajes-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesTab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesTab2PageRoutingModule {}
