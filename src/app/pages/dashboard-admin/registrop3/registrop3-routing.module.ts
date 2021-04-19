import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop3Page } from './registrop3.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop3PageRoutingModule {}
