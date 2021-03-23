import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP2Page } from './leer-p2.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP2PageRoutingModule {}
