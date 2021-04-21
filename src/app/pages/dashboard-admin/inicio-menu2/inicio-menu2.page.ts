import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';
import { Router } from '@angular/router';
import { TerminosCondiciones2Page } from '../../terminos-condiciones2/terminos-condiciones2.page';

@Component({
  selector: 'app-inicio-menu2',
  templateUrl: './inicio-menu2.page.html',
  styleUrls: ['./inicio-menu2.page.scss'],
})
export class InicioMenu2Page implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private nativePageTransitions: NativePageTransitions,
    private storage: Storage,
    private iab: InAppBrowser,
    private providerService: ProviderService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) { 
    this.server = this.providerService.server;
  }

  toast: any;
  dataPerfil: any;
  bly_usuario: string;
  ngOnInit() {
    this.storage.get('perfil').then((res) => {
      this.dataPerfil = res;
      this.bly_usuario = this.dataPerfil.bly_usuario;
    });
  }
  server: string;
  contentLoaded = false;
  ionViewWillEnter() {
    this.aventurasImg = [];
    this.cargarImagenesAventura();
    this.storage.get('perfil').then((res) => {
      this.dataPerfil = res;
      this.bly_usuario = this.dataPerfil.bly_usuario;
    });
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000); 
  }

  aventurasImg: any = [];
  cargarImagenesAventura(){
    return new Promise(resolve => {
      let body = {
        aksi: 'img-aventura'
      };
      this.providerService.postDataCIAV(body, 'db_cargarImagenesAventura.php').subscribe(data => {
        for (let imagenes of data.result){
          this.aventurasImg.push(imagenes);
        }
        resolve(true);
      });
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '¡Síguenos!',
      backdropDismiss: false,
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          cssClass: 'iconFacebook',
          handler: () => {
            this.iab.create(`https://www.facebook.com/Blybnmx`, `_system`);
          },
        },
        {
          text: 'Instragram',
          icon: 'logo-instagram',
          cssClass: 'iconInstagram',
          handler: () => {
            this.iab.create(`https://www.instagram.com/blybnmx/`, `_system`);
          },
        },
        {
          text: 'Twitter',
          icon: 'logo-twitter',
          cssClass: 'iconTwitter',
          handler: () => {
            this.iab.create(`https://twitter.com/Blybnmx?s=09`, `_system`);
          },
        },
        {
          text: 'TikTok',
          icon: 'logo-tiktok',
          cssClass: 'iconTiktok',
          handler: () => {
            this.iab.create(
              `https://www.tiktok.com/@blybnmx?lang=es`,
              `_system`
            );
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCancelar',
          handler: () => {
            console.log('Se cancelo la operacion');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async mostrarModal() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
    };
    this.nativePageTransitions.flip(options);
    const modal = await this.modalCtrl.create({
      component: TerminosCondiciones2Page,
      cssClass: 'my-custom-modal-css',
    });
    return await modal.present();
  }

  dataComentarios = {
    bly_usuario: ''
  };
  bly_comentarios = {
    comentario: ''
  };
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Déjanos tus comentarios',
      mode: 'ios',
      cssClass: 'my-custom-class',
      inputs: [
        {
          name: 'comentario',
          id: 'comentario',
          type: 'textarea',
          placeholder: 'Escribe tu mensaje...',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Aceptar',
          handler: (data: any) => {
            this.bly_comentarios = data;
            this.dataComentarios.bly_usuario = this.bly_usuario;
            this.presentCargaComentario();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentCargaComentario() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 1500,
      spinner: 'bubbles',
      mode: 'ios'
    });
    await loading.present();
    setTimeout(() => {
      this.registrarComentario();
    }, 2000);
  }

  async registrarComentario() {
    if (this.bly_usuario == '') {
      const toast = await this.toastController.create({
        message: 'Debe enviar un comentario valido...',
        duration: 2000,
      });
      toast.present();
    } else if (this.dataComentarios.bly_usuario == '') {
      const toast = await this.toastController.create({
        message: 'Debe enviar un comentario valido...',
        duration: 2000,
        mode: 'ios'
      })
      toast.present();
    } else {
      let body = {
        bly_Comentario: this.bly_comentarios.comentario,
        bly_usuario: this.dataComentarios.bly_usuario,
      };
      this.providerService
        .postDataRC(body, 'db_registrarComentario.php')
        .subscribe(async (data) => {
          if (data.error) {
            this.toast = this.toastController.create({
              message: 'Ha ocurrido un error, inténtelo más tarde...',
              duration: 2000,
              mode: 'ios'
            }).then((toastData) => {
              toastData.present();
            });
          } else {
            this.toast = this.toastController.create({
              message: 'Se ha enviado tu comentario exitosamente…',
              duration: 2000,
              mode: 'ios'
            }).then((toastData) => {
              toastData.present();
            });
          }
        }, (error) => {
          this.presentLoadingServer();
        });    
    }
  }
  async presentLoadingServer() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: "bubbles",
      mode: 'ios'
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }

  async presentAlertServer() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      mode: 'ios',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
        }
      }
      ]
    });
    await alert.present();
  }

  tipoaventura(aventura: any){
    if(aventura == 'Ciudad'){
      this.router.navigateByUrl('/dashboard/menutabs/tipo-aventura2');
    } else if(aventura == 'Playa'){
      this.router.navigateByUrl('/dashboard/menutabs/tipo-aventura3');
    }
  }

  registrar(){
    this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }
}
