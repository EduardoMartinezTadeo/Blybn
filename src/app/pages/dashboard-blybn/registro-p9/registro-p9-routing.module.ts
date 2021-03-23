import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP9Page } from './registro-p9.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP9PageRoutingModule {}
