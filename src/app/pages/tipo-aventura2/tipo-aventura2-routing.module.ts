import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAventura2Page } from './tipo-aventura2.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAventura2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAventura2PageRoutingModule {}
