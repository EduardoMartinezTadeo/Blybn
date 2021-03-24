import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop2r22Page } from './registrop2r22.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop2r22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop2r22PageRoutingModule {}
