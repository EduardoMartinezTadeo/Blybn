import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenutabsPage } from './menutabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menutabs/inicio-menu',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenutabsPage,
    children: [
      {
        path: 'inicio-menu',
        loadChildren: () => import('../inicio-menu/inicio-menu.module').then(m => m.InicioMenuPageModule)
      },
      {
        path: 'promociones',
        loadChildren: () => import('../promociones/promociones.module').then(m => m.PromocionesPageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: 'busqueda',
        loadChildren: () => import('../busqueda/busqueda.module').then( m => m.BusquedaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenutabsPageRoutingModule { }
