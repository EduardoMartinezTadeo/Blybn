import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP2r11Page } from './registro-p2r11.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP2r11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP2r11PageRoutingModule {}
