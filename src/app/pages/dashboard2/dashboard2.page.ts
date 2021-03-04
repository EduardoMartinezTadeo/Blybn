import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { OperacionesService } from '../../services/operaciones.service';
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss'],
})
export class Dashboard2Page implements OnInit {

  toast2: any;

  constructor(
    public alertCtrl: AlertController, 
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private toast: ToastController,
    private service: OperacionesService) { 
  }

  pages = [
    {
      title: 'Inicio',
      url: '/dashboard2/menutabs/inicio-menu',
      icon: 'storefront-outline',
      open: false
    },
    {
      title: 'Métodos de pago y Facturación',
      url: '/dashboard2/metodo-pago2',
      icon: 'card-outline',
      open: false,
    },
    {
      title: 'Información personal',
      children: [
        {
          title: 'Registrar Propiedad',
          url: '/dashboard2/registrar-propiedad2',
          icon: 'create-outline',
          open: false,
        },
        {
          title: 'Mensajes',
          url: '/dashboard/mensajes',
          icon: 'chatbubble-ellipses-outline',
          open: false,
        },
        {
          title: 'Términos y Condiciones',
          url: '/dashboard2/terminos2',
          icon: 'document-text-outline',
          open: false,
        },
        {
          title: 'Envíanos tus comentarios',
          url: '/dashboard2/envia-comentarios2',
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
          url: '/dashboard2/historial-renta2',
          icon: 'document-text-outline',
          open: false,
        }
      ]
    },
    {
      title: 'Ajustes',
      url: '/dashboard2/ajustes2',
      icon: 'cog-outline',
      open: false,
    },
  ];

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
            this.storage.remove('perfil');
            this.storage.remove('storage_blybn');
            this.storage.remove('facturacion');
            this.navCtrl.navigateRoot(['/login']);
            this.toast2 = this.toast.create({
              message: 'Se ha cerrado la sesión exitosamente',
              duration: 2000
            }).then((toastData) => {
              toastData.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }
 

  perfil(){
    this.router.navigateByUrl('/perfil2');
  }
  responseData: any;
  id_usuario: string;
  usuario: string;
  correo: string;
  perfildata: any;
  ionViewDidEnter(){
    this.storage.get('perfil').then((res) => {
      this.perfildata = res;
      this.usuario = this.perfildata.bly_nombre,
      this.correo = this.perfildata.bly_correoElectronico,
      this.id_usuario = this.perfildata.bly_usuario,
      console.log(this.id_usuario);
      this.service.consultarDatosFacturacion(this.id_usuario).subscribe(data => {
        this.responseData = data;
      });
    });
  }

}
