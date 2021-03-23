import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion3Page } from './animacion3.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion3PageRoutingModule {}
