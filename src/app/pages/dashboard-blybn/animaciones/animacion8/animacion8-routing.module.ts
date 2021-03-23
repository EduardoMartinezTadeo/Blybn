import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion8Page } from './animacion8.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion8PageRoutingModule {}
