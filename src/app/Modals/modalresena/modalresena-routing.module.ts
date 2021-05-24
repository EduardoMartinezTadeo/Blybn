import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalresenaPage } from './modalresena.page';

const routes: Routes = [
  {
    path: '',
    component: ModalresenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalresenaPageRoutingModule {}
