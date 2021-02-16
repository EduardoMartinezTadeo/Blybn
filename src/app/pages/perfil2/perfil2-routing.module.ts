import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil2Page } from './perfil2.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil2PageRoutingModule {}
