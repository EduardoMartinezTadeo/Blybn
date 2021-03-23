import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP1Page } from './leer-p1.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP1PageRoutingModule {}
