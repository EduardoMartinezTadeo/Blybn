import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  
  pages = [
    {
      title: 'Inicio',
      url: '/dashboard/menutabs/inicio-menu',
      icon: 'storefront-outline',
      open: false
    },
    {
      title: 'Métodos de pago y Facturación',
      url: '/dashboard/metodo-pago',
      icon: 'card-outline',
      open: false,
    },
    {
      title: 'Información personal',
      children: [
        {
          title: 'Registrar Propiedad',
          url: '/dashboard/registrar-propiedad',
          icon: 'create-outline',
          open: false,
        },
        {
          title: 'Términos y Condiciones',
          url: '/dashboard/terminos',
          icon: 'document-text-outline',
          open: false,
        },
        {
          title: 'Envíanos tus comentarios',
          url: '/dashboard/envia-comentarios',
          icon: 'mail-outline',
          open: false,
        }
      ]
    },
    {
      title: 'Rentas en proceso',
      children: [
        {
          title: 'Historial de Rentas',
          url: '/dashboard/historial-renta',
          icon: 'document-text-outline',
          open: false,
        },
        {
          title: 'Mis propiedades',
          url: '/dashboard/mis-propiedades',
          icon: 'business-outline',
          open: false,
        }
      ]
    },
    {
      title: 'Ajustes',
      url: '/dashboard/ajustes',
      icon: 'cog-outline',
      open: false,
    },
  ];

  

  constructor(public alertCtrl: AlertController, private router: Router) { 
  }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar sesión',
      message: '¿Está seguro de cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Se cancelo la operación');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.router.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }
 

  perfil(){
    this.router.navigateByUrl('/perfil');
  }

}
