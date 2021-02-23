import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modal6Page } from './modal6.page';

const routes: Routes = [
  {
    path: '',
    component: Modal6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modal6PageRoutingModule {}
