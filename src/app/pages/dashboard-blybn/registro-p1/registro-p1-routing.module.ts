import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP1Page } from './registro-p1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP1PageRoutingModule {}
