import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosCondiciones2Page } from './terminos-condiciones2.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosCondiciones2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosCondiciones2PageRoutingModule {}
