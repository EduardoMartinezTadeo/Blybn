import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb02Page } from './animacionb02.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb02PageRoutingModule {}
