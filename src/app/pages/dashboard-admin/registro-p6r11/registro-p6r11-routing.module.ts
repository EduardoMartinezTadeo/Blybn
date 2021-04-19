import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP6r11Page } from './registro-p6r11.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP6r11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP6r11PageRoutingModule {}
