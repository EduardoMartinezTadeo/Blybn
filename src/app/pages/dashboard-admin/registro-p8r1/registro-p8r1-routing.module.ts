import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP8r1Page } from './registro-p8r1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP8r1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP8r1PageRoutingModule {}
