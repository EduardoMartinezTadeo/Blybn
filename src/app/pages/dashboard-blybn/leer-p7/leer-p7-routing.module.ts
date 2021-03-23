import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerP7Page } from './leer-p7.page';

const routes: Routes = [
  {
    path: '',
    component: LeerP7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerP7PageRoutingModule {}
