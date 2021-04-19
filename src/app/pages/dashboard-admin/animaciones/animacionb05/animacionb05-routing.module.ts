import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb05Page } from './animacionb05.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb05PageRoutingModule {}
