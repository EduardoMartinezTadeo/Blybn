import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard2Page } from './dashboard2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard2/menutabs2/inicio-menu',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Dashboard2Page,
    children: [
      {
        path: 'menutabs2',
        loadChildren: () => import('../menutabs2/menutabs2.module').then( m => m.Menutabs2PageModule)
      },
      {
        path: 'historial-renta2',
        loadChildren: () => import('../historial-renta2/historial-renta2.module').then(m => m.HistorialRenta2PageModule)
      },
      {
        path: 'terminos2',
        loadChildren: () => import('../terminos2/terminos2.module').then(m => m.Terminos2PageModule)
      },
      {
        path: 'envia-comentarios2',
        loadChildren: () => import('../envia-comentarios2/envia-comentarios2.module').then(m => m.EnviaComentarios2PageModule)
      },
      {
        path: 'registrar-propiedad2',
        loadChildren: () => import('../registrar-propiedad2/registrar-propiedad2.module').then(m => m.RegistrarPropiedad2PageModule)
      },
      {
        path: 'metodo-pago2',
        loadChildren: () => import('../metodo-pago2/metodo-pago2.module').then(m => m.MetodoPago2PageModule)
      },
      {
        path: 'ajustes2',
        loadChildren: () => import('../ajustes2/ajustes2.module').then(m => m.Ajustes2PageModule)
      },
      {
        path: 'mensajes2',
        loadChildren: () => import('../mensajes2/mensajes2.module').then( m => m.Mensajes2PageModule)
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
export class Dashboard2PageRoutingModule { }
