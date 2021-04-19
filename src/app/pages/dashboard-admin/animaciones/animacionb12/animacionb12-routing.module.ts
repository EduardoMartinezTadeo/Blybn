import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacionb12Page } from './animacionb12.page';

const routes: Routes = [
  {
    path: '',
    component: Animacionb12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacionb12PageRoutingModule {}
