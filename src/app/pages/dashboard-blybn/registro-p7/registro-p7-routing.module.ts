import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP7Page } from './registro-p7.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP7PageRoutingModule {}
