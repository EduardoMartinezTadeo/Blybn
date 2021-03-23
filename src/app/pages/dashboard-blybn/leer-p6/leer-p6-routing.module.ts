import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP6Page } from './leer-p6.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP6PageRoutingModule {}
