import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP4Page } from './leer-p4.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP4PageRoutingModule {}
