import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop4Page } from './registrop4.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop4PageRoutingModule {}
