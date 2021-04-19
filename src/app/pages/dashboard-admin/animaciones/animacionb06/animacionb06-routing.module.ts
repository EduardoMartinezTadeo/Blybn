import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb06Page } from './animacionb06.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb06PageRoutingModule {}
