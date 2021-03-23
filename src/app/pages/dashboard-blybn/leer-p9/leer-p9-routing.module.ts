import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP9Page } from './leer-p9.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP9PageRoutingModule {}
