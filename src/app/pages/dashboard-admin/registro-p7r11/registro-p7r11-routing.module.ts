import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroP7r11Page } from './registro-p7r11.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroP7r11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroP7r11PageRoutingModule {}
