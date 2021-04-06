import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFPage } from './registro-f.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFPageRoutingModule {}
