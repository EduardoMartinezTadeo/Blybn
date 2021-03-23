import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP11Page } from './leer-p11.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP11PageRoutingModule {}
