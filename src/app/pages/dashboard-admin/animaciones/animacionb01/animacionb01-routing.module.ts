import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb01Page } from './animacionb01.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb01PageRoutingModule {}
