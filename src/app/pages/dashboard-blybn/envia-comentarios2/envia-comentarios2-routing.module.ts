import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviaComentarios2Page } from './envia-comentarios2.page';

const routes: Routes = [
  {
    path: '',
    component: EnviaComentarios2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviaComentarios2PageRoutingModule {}
