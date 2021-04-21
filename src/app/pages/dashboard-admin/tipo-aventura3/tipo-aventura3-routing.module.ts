import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAventura3Page } from './tipo-aventura3.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAventura3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAventura3PageRoutingModule {}
