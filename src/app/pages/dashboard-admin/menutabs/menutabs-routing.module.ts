import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenutabsPage } from './menutabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menutabs/inicio-menu2',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenutabsPage,
    children: [
      {
        path: 'inicio-menu2',
        loadChildren: () => import('../inicio-menu2/inicio-menu2.module').then( m => m.InicioMenu2PageModule)
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
        path: 'mensajes-tab',
        loadChildren: () => import('../mensajes-tab/mensajes-tab.module').then( m => m.MensajesTabPageModule)
      },
      {
        path: 'registrar-propiedad',
        loadChildren: () => import('../registrar-propiedad/registrar-propiedad.module').then( m => m.RegistrarPropiedadPageModule)
      },
      {
        path: 'tipo-aventura2',
        loadChildren: () => import('../tipo-aventura2/tipo-aventura2.module').then( m => m.TipoAventura2PageModule)
      },
      {
        path: 'tipo-aventura3',
        loadChildren: () => import('../tipo-aventura3/tipo-aventura3.module').then( m => m.TipoAventura3PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenutabsPageRoutingModule { }
