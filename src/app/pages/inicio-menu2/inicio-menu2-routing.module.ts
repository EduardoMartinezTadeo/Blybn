import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMenu2Page } from './inicio-menu2.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMenu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMenu2PageRoutingModule {}
