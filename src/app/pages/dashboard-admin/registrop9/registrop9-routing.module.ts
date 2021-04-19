import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop9Page } from './registrop9.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop9PageRoutingModule {}
