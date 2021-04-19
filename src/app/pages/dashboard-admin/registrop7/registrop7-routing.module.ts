import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop7Page } from './registrop7.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop7PageRoutingModule {}
