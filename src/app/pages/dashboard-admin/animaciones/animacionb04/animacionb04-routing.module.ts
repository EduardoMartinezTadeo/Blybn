import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb04Page } from './animacionb04.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb04PageRoutingModule {}
