import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb03Page } from './animacionb03.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb03PageRoutingModule {}
