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
    loadChildren: () => import('./pages/dashboard-admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
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
    loadChildren: () => import('./pages/dashboard-admin/perfil/perfil.module').then( m => m.PerfilPageModule)
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
    loadChildren: () => import('./pages/dashboard-blybn/dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'perfil2',
    loadChildren: () => import('./pages/dashboard-blybn/perfil2/perfil2.module').then( m => m.Perfil2PageModule)
  },
  {
    path: 'detalle-perfil2',
    loadChildren: () => import('./pages/detalle-perfil2/detalle-perfil2.module').then( m => m.DetallePerfil2PageModule)
  },
  {
    path: 'offline',
    loadChildren: () => import('./offline/offline.module').then( m => m.OfflinePageModule)
  },
  {
    path: 'modal6',
    loadChildren: () => import('./Modals/modal6/modal6.module').then( m => m.Modal6PageModule)
  },
  {
    path: 'modal7',
    loadChildren: () => import('./Modals/modal7/modal7.module').then( m => m.Modal7PageModule)
  },
  {
    path: 'modal8',
    loadChildren: () => import('./Modals/modal8/modal8.module').then( m => m.Modal8PageModule)
  },
  {
    path: 'modal9',
    loadChildren: () => import('./Modals/modal9/modal9.module').then( m => m.Modal9PageModule)
  },
  {
    path: 'terminos-condiciones2',
    loadChildren: () => import('./pages/terminos-condiciones2/terminos-condiciones2.module').then( m => m.TerminosCondiciones2PageModule)
  },
  {
    path: 'tipo-aventura2',
    loadChildren: () => import('./pages/dashboard-admin/tipo-aventura2/tipo-aventura2.module').then( m => m.TipoAventura2PageModule)
  },
  {
    path: 'modal10',
    loadChildren: () => import('./Modals/modal10/modal10.module').then( m => m.Modal10PageModule)
  },
  {
    path: 'registro-p1',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p1/registro-p1.module').then( m => m.RegistroP1PageModule)
  },
  {
    path: 'registro-p2',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p2/registro-p2.module').then( m => m.RegistroP2PageModule)
  },
  {
    path: 'registro-p3',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p3/registro-p3.module').then( m => m.RegistroP3PageModule)
  },
  {
    path: 'registro-p4',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p4/registro-p4.module').then( m => m.RegistroP4PageModule)
  },
  {
    path: 'registro-p5',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p5/registro-p5.module').then( m => m.RegistroP5PageModule)
  },
  {
    path: 'registro-p6',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p6/registro-p6.module').then( m => m.RegistroP6PageModule)
  },
  {
    path: 'registro-p7',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p7/registro-p7.module').then( m => m.RegistroP7PageModule)
  },
  {
    path: 'registro-p8',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p8/registro-p8.module').then( m => m.RegistroP8PageModule)
  },
  {
    path: 'registro-p9',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p9/registro-p9.module').then( m => m.RegistroP9PageModule)
  },
  {
    path: 'animacion1',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion1/animacion1.module').then( m => m.Animacion1PageModule)
  },
  {
    path: 'animacion2',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion2/animacion2.module').then( m => m.Animacion2PageModule)
  },
  {
    path: 'animacion3',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion3/animacion3.module').then( m => m.Animacion3PageModule)
  },
  {
    path: 'animacion4',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion4/animacion4.module').then( m => m.Animacion4PageModule)
  },
  {
    path: 'animacion5',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion5/animacion5.module').then( m => m.Animacion5PageModule)
  },
  {
    path: 'animacion6',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion6/animacion6.module').then( m => m.Animacion6PageModule)
  },
  {
    path: 'animacion7',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion7/animacion7.module').then( m => m.Animacion7PageModule)
  },
  {
    path: 'animacion8',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion8/animacion8.module').then( m => m.Animacion8PageModule)
  },
  {
    path: 'animacion9',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion9/animacion9.module').then( m => m.Animacion9PageModule)
  },
  {
    path: 'registro-p10',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p10/registro-p10.module').then( m => m.RegistroP10PageModule)
  },
  {
    path: 'registro-p11',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p11/registro-p11.module').then( m => m.RegistroP11PageModule)
  },
  {
    path: 'animacion10',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion10/animacion10.module').then( m => m.Animacion10PageModule)
  },
  {
    path: 'animacion11',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion11/animacion11.module').then( m => m.Animacion11PageModule)
  },
  {
    path: 'registro-p2r11',
    loadChildren: () => import('./pages/dashboard-blybn/registro-p2r11/registro-p2r11.module').then( m => m.RegistroP2r11PageModule)
  },
  {
    path: 'registrop2r22',
    loadChildren: () => import('./pages/dashboard-blybn/registrop2r22/registrop2r22.module').then( m => m.Registrop2r22PageModule)
  },
  {
    path: 'registrop8r1',
    loadChildren: () => import('./pages/dashboard-blybn/registrop8r1/registrop8r1.module').then( m => m.Registrop8r1PageModule)
  },
  {
    path: 'registrop6r11',
    loadChildren: () => import('./pages/dashboard-blybn/registrop6r11/registrop6r11.module').then( m => m.Registrop6r11PageModule)
  },
  {
    path: 'registrop7r11',
    loadChildren: () => import('./pages/dashboard-blybn/registrop7r11/registrop7r11.module').then( m => m.Registrop7r11PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
