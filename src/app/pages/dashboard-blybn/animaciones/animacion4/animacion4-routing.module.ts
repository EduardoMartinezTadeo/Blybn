import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion4Page } from './animacion4.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion4PageRoutingModule {}
