import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ajustes2Page } from './ajustes2.page';

const routes: Routes = [
  {
    path: '',
    component: Ajustes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ajustes2PageRoutingModule {}
