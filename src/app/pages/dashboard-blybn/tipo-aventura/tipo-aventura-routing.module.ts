import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAventuraPage } from './tipo-aventura.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAventuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAventuraPageRoutingModule {}
