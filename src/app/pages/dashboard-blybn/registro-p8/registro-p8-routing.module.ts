import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP8Page } from './registro-p8.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP8PageRoutingModule {}
