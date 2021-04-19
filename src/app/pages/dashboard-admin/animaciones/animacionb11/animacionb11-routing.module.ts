import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb11Page } from './animacionb11.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb11PageRoutingModule {}
