import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion11Page } from './animacion11.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion11PageRoutingModule {}
