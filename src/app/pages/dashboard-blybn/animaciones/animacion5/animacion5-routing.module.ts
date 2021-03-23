import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion5Page } from './animacion5.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion5PageRoutingModule {}
