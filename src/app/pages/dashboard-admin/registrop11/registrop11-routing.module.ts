import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop11Page } from './registrop11.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop11PageRoutingModule {}
