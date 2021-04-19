import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb09Page } from './animacionb09.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb09PageRoutingModule {}
