import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop8Page } from './registrop8.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop8PageRoutingModule {}
