import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop10Page } from './registrop10.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop10PageRoutingModule {}
