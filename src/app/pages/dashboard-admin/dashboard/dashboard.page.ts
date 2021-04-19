import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PerfilService } from 'src/app/services/perfil.service';
import { OperacionesService } from 'src/app/services/operaciones.service';
import { ProviderService } from 'src/app/services/provider.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  toast2: any;
  server: string;
  constructor(
    public alertCtrl: AlertController, 
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private toast: ToastController,
    private perfilService: PerfilService,
    private service: OperacionesService,
    private provider: ProviderService) { 
      this.server = this.provider.server;
  }
  
  pages = [
    {
      title: 'Inicio',
      url: '/dashboard/menutabs/inicio-menu2',
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
          title: 'Mensajes',
          url: '/dashboard/mensajes',
          icon: 'chatbubble-ellipses-outline',
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

  body: any;
  ngOnInit() {
    this.storage.get('perfil').then((res) => {
      this.perfildata = res;
      this.id_usuario = this.perfildata.bly_usuario,  
      this.body = {
        bly_usuario: this.id_usuario
      }
      this.perfilService.postDataIS(this.body, 'db_registroSesionIniciada.php').subscribe(async data =>{
        var alert = data.msg;
        if(data.success){
          const toast = await this.toast.create({
            message: 'Bienvenido',
            duration: 1000
          });
          toast.present();
        } else {
          const toast = await this.toast.create({
            message: alert,
            duration: 1000
          });
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
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
            let body = {
              bly_usuario: this.id_usuario
            }
            this.perfilService.postDataCS(body, 'db_registroSesionFinalizada.php').subscribe(async data=> {
              var alert = data.msg;
              if(data.success){
                const toast = await this.toast.create({
                  message: 'Vuelve pronto',
                  duration: 1000
                });
                toast.present();
              } else {
                const toast = await this.toast.create({
                  message: alert,
                  duration: 1000
                });
              }
            });
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
    this.router.navigateByUrl('/perfil');
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
      this.service.consultarDatosFacturacionAdmin(this.id_usuario).subscribe(data => {
        this.responseData = data;
        this.cargarFotoPerfil();
      });
    });
  }

  foto: string;
  fotoPerfil : any = [];
  cargarFotoPerfil(){
    return new Promise(resolve => {
      let body = {
        aksi: 'perfilFoto',
        bly_usuario: this.id_usuario
      }
      this.provider.postDataCFPA(body, 'db_cargarFotoPerfilAct.php').subscribe(data => {
        this.fotoPerfil = data;
        this.foto = this.fotoPerfil.bly_fotografia;
        resolve(true);
      });
    });      
  }

  onError(img) {
    img.src = '../../../../assets/imgs/avatar.svg';
  }
}
