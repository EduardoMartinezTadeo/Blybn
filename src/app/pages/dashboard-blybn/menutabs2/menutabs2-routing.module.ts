import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menutabs2Page } from './menutabs2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menutabs2/inicio-menu',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Menutabs2Page,
    children: [
      {
        path: 'inicio-menu',
        loadChildren: () => import('../inicio-menu/inicio-menu.module').then(m => m.InicioMenuPageModule)
      },
      {
        path: 'promociones',
        loadChildren: () => import('../../promociones/promociones.module').then(m => m.PromocionesPageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: 'busqueda',
        loadChildren: () => import('../../busqueda/busqueda.module').then( m => m.BusquedaPageModule)
      },
      {
        path: 'mensajes-tab2',
        loadChildren: () => import('../mensajes-tab2/mensajes-tab2.module').then( m => m.MensajesTab2PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menutabs2PageRoutingModule {}
