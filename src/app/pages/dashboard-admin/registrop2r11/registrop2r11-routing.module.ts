import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop2r11Page } from './registrop2r11.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop2r11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop2r11PageRoutingModule {}
