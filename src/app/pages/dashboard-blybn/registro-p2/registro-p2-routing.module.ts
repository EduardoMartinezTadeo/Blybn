import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP2Page } from './registro-p2.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP2PageRoutingModule {}
