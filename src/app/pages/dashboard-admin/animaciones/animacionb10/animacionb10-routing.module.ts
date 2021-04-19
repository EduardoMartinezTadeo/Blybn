import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb10Page } from './animacionb10.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb10PageRoutingModule {}
