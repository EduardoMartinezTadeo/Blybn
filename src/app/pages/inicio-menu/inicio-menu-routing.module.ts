import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMenuPage } from './inicio-menu.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMenuPageRoutingModule {}
