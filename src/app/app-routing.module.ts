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
  },
  {
    path: 'registro-f',
    loadChildren: () => import('./pages/dashboard-blybn/registro-f/registro-f.module').then( m => m.RegistroFPageModule)
  },
  {
    path: 'animacion12',
    loadChildren: () => import('./pages/dashboard-blybn/animaciones/animacion12/animacion12.module').then( m => m.Animacion12PageModule)
  },
  {
    path: 'animacionb01',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb01/animacionb01.module').then( m => m.Animacionb01PageModule)
  },
  {
    path: 'animacionb02',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb02/animacionb02.module').then( m => m.Animacionb02PageModule)
  },
  {
    path: 'animacionb03',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb03/animacionb03.module').then( m => m.Animacionb03PageModule)
  },
  {
    path: 'animacionb04',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb04/animacionb04.module').then( m => m.Animacionb04PageModule)
  },
  {
    path: 'animacionb05',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb05/animacionb05.module').then( m => m.Animacionb05PageModule)
  },
  {
    path: 'animacionb06',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb06/animacionb06.module').then( m => m.Animacionb06PageModule)
  },
  {
    path: 'animacionb07',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb07/animacionb07.module').then( m => m.Animacionb07PageModule)
  },
  {
    path: 'animacionb08',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb08/animacionb08.module').then( m => m.Animacionb08PageModule)
  },
  {
    path: 'animacionb09',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb09/animacionb09.module').then( m => m.Animacionb09PageModule)
  },
  {
    path: 'animacionb10',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb10/animacionb10.module').then( m => m.Animacionb10PageModule)
  },
  {
    path: 'animacionb11',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb11/animacionb11.module').then( m => m.Animacionb11PageModule)
  },
  {
    path: 'animacionb12',
    loadChildren: () => import('./pages/dashboard-admin/animaciones/animacionb12/animacionb12.module').then( m => m.Animacionb12PageModule)
  },
  {
    path: 'registrop1',
    loadChildren: () => import('./pages/dashboard-admin/registrop1/registrop1.module').then( m => m.Registrop1PageModule)
  },
  {
    path: 'registrop2',
    loadChildren: () => import('./pages/dashboard-admin/registrop2/registrop2.module').then( m => m.Registrop2PageModule)
  },
  {
    path: 'registrop3',
    loadChildren: () => import('./pages/dashboard-admin/registrop3/registrop3.module').then( m => m.Registrop3PageModule)
  },
  {
    path: 'registrop4',
    loadChildren: () => import('./pages/dashboard-admin/registrop4/registrop4.module').then( m => m.Registrop4PageModule)
  },
  {
    path: 'registrop5',
    loadChildren: () => import('./pages/dashboard-admin/registrop5/registrop5.module').then( m => m.Registrop5PageModule)
  },
  {
    path: 'registrop6',
    loadChildren: () => import('./pages/dashboard-admin/registrop6/registrop6.module').then( m => m.Registrop6PageModule)
  },
  {
    path: 'registrop7',
    loadChildren: () => import('./pages/dashboard-admin/registrop7/registrop7.module').then( m => m.Registrop7PageModule)
  },
  {
    path: 'registrop8',
    loadChildren: () => import('./pages/dashboard-admin/registrop8/registrop8.module').then( m => m.Registrop8PageModule)
  },
  {
    path: 'registrop9',
    loadChildren: () => import('./pages/dashboard-admin/registrop9/registrop9.module').then( m => m.Registrop9PageModule)
  },
  {
    path: 'registrop10',
    loadChildren: () => import('./pages/dashboard-admin/registrop10/registrop10.module').then( m => m.Registrop10PageModule)
  },
  {
    path: 'registrop11',
    loadChildren: () => import('./pages/dashboard-admin/registrop11/registrop11.module').then( m => m.Registrop11PageModule)
  },
  {
    path: 'registrop2r11',
    loadChildren: () => import('./pages/dashboard-admin/registrop2r11/registrop2r11.module').then( m => m.Registrop2r11PageModule)
  },
  {
    path: 'registro-p2r22',
    loadChildren: () => import('./pages/dashboard-admin/registro-p2r22/registro-p2r22.module').then( m => m.RegistroP2r22PageModule)
  },
  {
    path: 'registro-p6r11',
    loadChildren: () => import('./pages/dashboard-admin/registro-p6r11/registro-p6r11.module').then( m => m.RegistroP6r11PageModule)
  },
  {
    path: 'registro-p7r11',
    loadChildren: () => import('./pages/dashboard-admin/registro-p7r11/registro-p7r11.module').then( m => m.RegistroP7r11PageModule)
  },
  {
    path: 'registro-p8r1',
    loadChildren: () => import('./pages/dashboard-admin/registro-p8r1/registro-p8r1.module').then( m => m.RegistroP8r1PageModule)
  },
  {
    path: 'registro-final',
    loadChildren: () => import('./pages/dashboard-admin/registro-final/registro-final.module').then( m => m.RegistroFinalPageModule)
  },   {
    path: 'detalle-propiedades/:bly_registroPropiedad/:bly_usuario',
    loadChildren: () => import('./pages/dashboard-admin/detalle-propiedades/detalle-propiedades.module').then( m => m.DetallePropiedadesPageModule)
  },
  {
    path: 'modal-busqueda-error',
    loadChildren: () => import('./Modals/modal-busqueda-error/modal-busqueda-error.module').then( m => m.ModalBusquedaErrorPageModule)
  },
  {
    path: 'modal-busqueda',
    loadChildren: () => import('./Modals/modal-busqueda/modal-busqueda.module').then( m => m.ModalBusquedaPageModule)
  },
  {
    path: 'modal-promociones',
    loadChildren: () => import('./Modals/modal-promociones/modal-promociones.module').then( m => m.ModalPromocionesPageModule)
  },
  {
    path: 'modal-detalle/:bly_registroPropiedad/:bly_usuario',
    loadChildren: () => import('./Modals/modal-detalle/modal-detalle.module').then( m => m.ModalDetallePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
