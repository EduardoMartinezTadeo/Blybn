import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modal9Page } from './modal9.page';

const routes: Routes = [
  {
    path: '',
    component: Modal9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modal9PageRoutingModule {}
