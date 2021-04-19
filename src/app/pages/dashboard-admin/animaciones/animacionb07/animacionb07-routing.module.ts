import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb07Page } from './animacionb07.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb07PageRoutingModule {}
