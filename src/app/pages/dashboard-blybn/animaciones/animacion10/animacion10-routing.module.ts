import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion10Page } from './animacion10.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion10PageRoutingModule {}
