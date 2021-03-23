import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion7Page } from './animacion7.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion7PageRoutingModule {}
