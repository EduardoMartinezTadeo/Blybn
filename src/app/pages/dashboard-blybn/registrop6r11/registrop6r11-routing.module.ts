import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrop6r11Page } from './registrop6r11.page';

const routes: Routes = [
  {
    path: '',
    component: Registrop6r11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrop6r11PageRoutingModule {}
