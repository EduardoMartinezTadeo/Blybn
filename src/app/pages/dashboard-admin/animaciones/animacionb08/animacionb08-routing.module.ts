import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb08Page } from './animacionb08.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb08PageRoutingModule {}
