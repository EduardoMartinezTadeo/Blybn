import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modal10Page } from './modal10.page';

const routes: Routes = [
  {
    path: '',
    component: Modal10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modal10PageRoutingModule {}
