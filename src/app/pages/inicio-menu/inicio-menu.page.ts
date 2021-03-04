import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { TerminosCondicionesPage } from '../terminos-condiciones/terminos-condiciones.page';
import { Storage } from '@ionic/storage';
import { NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-inicio-menu',
  templateUrl: './inicio-menu.page.html',
  styleUrls: ['./inicio-menu.page.scss'],
})
export class InicioMenuPage implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    private storage: Storage,
    private nativePageTransitions: NativePageTransitions,
    private iab: InAppBrowser) { }

  ngOnInit() {
  }


  onAviso() {
    this.presentAlertPrompt();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '¡Síguenos!',
      backdropDismiss: false,
      cssClass: 'match-item-action-sheet',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          cssClass: 'iconFacebook',
          handler: () => {
            this.iab.create(`https://www.facebook.com/Blybnmx`, `_system`);
          }
        }, {
          text: 'Instragram',
          icon: 'logo-instagram',
          cssClass: 'iconInstagram',
          handler: () => {
            this.iab.create(`https://www.instagram.com/blybnmx/`, `_system`);
          }
        }, {
          text: 'Twitter',
          icon: 'logo-twitter',
          cssClass: 'iconTwitter',
          handler: () => {
            this.iab.create(`https://twitter.com/Blybnmx?s=09`, `_system`);
          }
        }, {
          text: 'TikTok',
          icon: 'logo-tiktok',
          cssClass: 'iconTiktok',
          handler: () => {
            this.iab.create(`https://www.tiktok.com/@blybnmx?lang=es`, `_system`);
          }
        }, {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCancelar',
          handler: () => {
            console.log('Se cancelo la operacion');
          }
        }]
    });
    await actionSheet.present();
  }

  async mostrarModal() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativePageTransitions.flip(options);
    const modal = await this.modalCtrl.create({
      component: TerminosCondicionesPage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Déjanos tus comentarios',
      cssClass: 'my-custom-class',
      inputs: [
        {
          name: 'comentario',
          id: 'comentario',
          type: 'textarea',
          placeholder: 'Escribe tu mensaje...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (data: any) => {
            console.log(data)
          }
        }
      ]
    });

    await alert.present();
  }

}
