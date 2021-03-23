import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP11Page } from './registro-p11.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP11PageRoutingModule {}
