import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalArchivedPage } from './modal-archived.page';

const routes: Routes = [
  {
    path: '',
    component: ModalArchivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalArchivedPageRoutingModule {}
