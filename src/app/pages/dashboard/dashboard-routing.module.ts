import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/menutabs/inicio-menu',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'menutabs',
        loadChildren: () => import('../menutabs/menutabs.module').then( m => m.MenutabsPageModule)
      },
      {
        path: 'historial-renta',
        loadChildren: () => import('../historial-renta/historial-renta.module').then( m => m.HistorialRentaPageModule)
      },
      {
        path: 'terminos',
        loadChildren: () => import('../terminos/terminos.module').then( m => m.TerminosPageModule)
      },
      {
        path: 'envia-comentarios',
        loadChildren: () => import('../envia-comentarios/envia-comentarios.module').then( m => m.EnviaComentariosPageModule)
      },
      {
        path: 'registrar-propiedad',
        loadChildren: () => import('../registrar-propiedad/registrar-propiedad.module').then( m => m.RegistrarPropiedadPageModule)
      },
      {
        path: 'mis-propiedades',
        loadChildren: () => import('../mis-propiedades/mis-propiedades.module').then( m => m.MisPropiedadesPageModule)
      },
      {
        path: 'metodo-pago',
        loadChildren: () => import('../metodo-pago/metodo-pago.module').then( m => m.MetodoPagoPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then( m => m.AjustesPageModule)
      },
      {
        path: 'inicio-menu',
        loadChildren: () => import('../inicio-menu/inicio-menu.module').then( m => m.InicioMenuPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
