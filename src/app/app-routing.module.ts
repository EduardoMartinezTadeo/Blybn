import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'splash', pathMatch: 'full' 
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'aviso',
    loadChildren: () => import('./aviso/aviso.module').then( m => m.AvisoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) 
  },  
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detalle-mensaje',
    loadChildren: () => import('./pages/detalle-mensaje/detalle-mensaje.module').then( m => m.DetalleMensajePageModule)
  },
  {
    path: 'detalle-perfil',
    loadChildren: () => import('./pages/detalle-perfil/detalle-perfil.module').then( m => m.DetallePerfilPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },  
  {
    path: 'modal-aviso',
    loadChildren: () => import('./pages/modal-aviso/modal-aviso.module').then( m => m.ModalAvisoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },  
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'terminos-condiciones',
    loadChildren: () => import('./pages/terminos-condiciones/terminos-condiciones.module').then( m => m.TerminosCondicionesPageModule)
  },
  {
    path: 'modal1',
    loadChildren: () => import('./Modals/modal1/modal1.module').then( m => m.Modal1PageModule)
  },
  {
    path: 'modal2',
    loadChildren: () => import('./Modals/modal2/modal2.module').then( m => m.Modal2PageModule)
  },
  {
    path: 'modal3',
    loadChildren: () => import('./Modals/modal3/modal3.module').then( m => m.Modal3PageModule)
  },
  {
    path: 'modal4',
    loadChildren: () => import('./Modals/modal4/modal4.module').then( m => m.Modal4PageModule)
  },
  {
    path: 'modal5',
    loadChildren: () => import('./Modals/modal5/modal5.module').then( m => m.Modal5PageModule)
  },   {
    path: 'dashboard2',
    loadChildren: () => import('./pages/dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'perfil2',
    loadChildren: () => import('./pages/perfil2/perfil2.module').then( m => m.Perfil2PageModule)
  },
  {
    path: 'detalle-perfil2',
    loadChildren: () => import('./pages/detalle-perfil2/detalle-perfil2.module').then( m => m.DetallePerfil2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
