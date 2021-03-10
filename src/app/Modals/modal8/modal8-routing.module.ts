import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modal8Page } from './modal8.page';

const routes: Routes = [
  {
    path: '',
    component: Modal8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modal8PageRoutingModule {}
