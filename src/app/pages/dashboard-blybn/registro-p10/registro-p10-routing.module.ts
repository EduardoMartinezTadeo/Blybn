import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP10Page } from './registro-p10.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP10PageRoutingModule {}
