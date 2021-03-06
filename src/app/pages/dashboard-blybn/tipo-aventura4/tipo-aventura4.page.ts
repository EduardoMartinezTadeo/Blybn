import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from 'src/app/services/provider.service';
import { TerminosCondiciones2Page } from '../../terminos-condiciones2/terminos-condiciones2.page';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-tipo-aventura4',
  templateUrl: './tipo-aventura4.page.html',
  styleUrls: ['./tipo-aventura4.page.scss'],
})
export class TipoAventura4Page implements OnInit {

  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private nativePageTransitions: NativePageTransitions,
    private modalCtrl: ModalController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private providerService: ProviderService,
    private router: Router,
    private servicio: DataService
  ) {
    this.server = this.providerService.server;
   }
  server: string;
  contentLoaded = false;
  toast: any;
  dataPerfil: any;
  bly_usuario: string;
  ngOnInit() {
    this.storage.get('perfil').then((res) => {
      this.dataPerfil = res;
      this.bly_usuario = this.dataPerfil.bly_usuario;
    });
  }

  imagenesTipoAventura: any = [];
  imagenAventura: string;
  cargarImagenAventura(){
    let body = {
      aksi: 'img-aventura',
      bly_aventura: 2
    }
    this.providerService.postDataCTA(body, 'db_cargarImagenAventura.php').subscribe(data => {
      this.imagenesTipoAventura = data;
      this.imagenAventura = this.imagenesTipoAventura.bly_nombreImagen;
    })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '??S??guenos!',
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'match-item-action-sheet',
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
      header: 'D??janos tus comentarios',
      cssClass: 'my-custom-class',
      mode: 'ios',
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
        mode: 'ios'
      });
      toast.present();
    } else if (this.dataComentarios.bly_usuario == '') {
      const toast = await this.toastController.create({
        message: 'Debe enviar un comentario valido...',
        duration: 2000,
        mode: 'ios'
      });
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
              message: 'Ha ocurrido un error, int??ntelo m??s tarde...',
              duration: 2000,
              mode: 'ios'
            }).then((toastData) => {
              toastData.present();
            });
          } else {
            this.toast = this.toastController.create({
              message: 'Se ha enviado tu comentario exitosamente???',
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
      mode: 'ios',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexi??n!!!',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.router.navigateByUrl('/tipo-aventura');
        }
      }
      ]
    });
    await alert.present();
  }

  ionViewWillEnter() {
    this.cargarImagenesPlaya();
    this.cargarImagenAventura();
    setTimeout(() => {
      this.contentLoaded = true;        
    }, 5000);    
  }

  registrar(){
    this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
  }
  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }

  informacionPlaya: any = [];
  cargarImagenesPlaya(){
    let body = {
      aksi: 'img-estadoPlaya'
    }
    this.providerService.postDataCITAP(body, 'db_cargarImagenesEstadoPlaya.php').subscribe(data => {
      this.informacionPlaya = data.result;
    });
  }

  buscar: string;
  buscarEstado(dataBuscar:any){
    this.buscar = dataBuscar;
   this.buscarPropiedadLoading();
  }

  responseData: any;
  async buscarPropiedadLoading() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento',
      mode: 'ios',
      spinner: 'bubbles',
      duration: 1500
    });
    await loading.present();
    setTimeout(() => {
      this.servicio.buscarPropiedadPlaya(this.buscar).subscribe(data => {
        this.responseData = data;
      })
    },1600)
  }
}
