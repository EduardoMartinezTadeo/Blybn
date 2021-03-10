import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modal7Page } from './modal7.page';

const routes: Routes = [
  {
    path: '',
    component: Modal7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modal7PageRoutingModule {}
