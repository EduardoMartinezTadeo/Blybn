import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP10Page } from './leer-p10.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP10PageRoutingModule {}
