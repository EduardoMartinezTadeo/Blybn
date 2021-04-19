import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP2r22Page } from './registro-p2r22.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP2r22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP2r22PageRoutingModule {}
