import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAventura4Page } from './tipo-aventura4.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAventura4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAventura4PageRoutingModule {}
