import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP5Page } from './registro-p5.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP5PageRoutingModule {}
