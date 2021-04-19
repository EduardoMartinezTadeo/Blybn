import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop5Page } from './registrop5.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop5PageRoutingModule {}
