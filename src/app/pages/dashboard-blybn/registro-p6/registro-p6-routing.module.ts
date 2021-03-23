import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP6Page } from './registro-p6.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP6PageRoutingModule {}
