import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP8Page } from './leer-p8.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP8PageRoutingModule {}
