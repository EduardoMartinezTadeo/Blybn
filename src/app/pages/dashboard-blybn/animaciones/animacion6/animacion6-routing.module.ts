import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacion6Page } from './animacion6.page';

const routes: Routes = [
  {
    path: '',
    component: Animacion6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacion6PageRoutingModule {}
