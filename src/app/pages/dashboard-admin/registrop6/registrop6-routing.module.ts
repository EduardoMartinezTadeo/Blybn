import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop6Page } from './registrop6.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop6PageRoutingModule {}
