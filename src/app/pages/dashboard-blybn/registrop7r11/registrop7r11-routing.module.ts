import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop7r11Page } from './registrop7r11.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop7r11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop7r11PageRoutingModule {}
