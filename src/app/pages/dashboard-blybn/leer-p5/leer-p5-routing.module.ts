import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP5Page } from './leer-p5.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP5PageRoutingModule {}
