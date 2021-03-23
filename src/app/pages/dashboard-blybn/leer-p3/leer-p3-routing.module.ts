import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP3Page } from './leer-p3.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP3PageRoutingModule {}
