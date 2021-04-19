import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop2Page } from './registrop2.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop2PageRoutingModule {}
