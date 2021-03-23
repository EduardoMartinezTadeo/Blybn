import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP3Page } from './registro-p3.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP3PageRoutingModule {}
