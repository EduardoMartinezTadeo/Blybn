import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviaComentariosPage } from './envia-comentarios.page';

const routes: Routes = [
  {
    path: '',
    component: EnviaComentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviaComentariosPageRoutingModule {}
