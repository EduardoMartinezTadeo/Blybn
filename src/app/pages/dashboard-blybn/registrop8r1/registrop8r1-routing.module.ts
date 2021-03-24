import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop8r1Page } from './registrop8r1.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop8r1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop8r1PageRoutingModule {}
