import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion12Page } from './animacion12.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion12PageRoutingModule {}
