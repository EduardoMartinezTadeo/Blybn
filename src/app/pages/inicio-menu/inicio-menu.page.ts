import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { TerminosCondicionesPage } from '../terminos-condiciones/terminos-condiciones.page';
import { Storage } from '@ionic/storage';

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
    private storage: Storage) { }

  ngOnInit() {
  }

  datastorage: any;
  datos: string;
  roleValue: any;
  ionViewDidEnter(){
    this.storage.get('storage_blybn').then((res) => {
      console.log(res);
    });
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
            console.log('Facebook seleccionado');
          }
        }, {
          text: 'Instragram',
          icon: 'logo-instagram',
          cssClass: 'iconInstagram',
          handler: () => {
            console.log('Instagram seleccionado');
          }
        }, {
          text: 'Twitter',
          icon: 'logo-twitter',
          cssClass: 'iconTwitter',
          handler: () => {
            console.log('Twitter seleccionado');
          }
        }, {
          text: 'Youtube',
          icon: 'logo-youtube',
          cssClass: 'iconYoutube',
          handler: () => {
            console.log('Youtube seleccionado');
          }
        }, {
          text: 'TikTok',
          icon: 'logo-tiktok',
          cssClass: 'iconTiktok',
          handler: () => {
            console.log('Youtube seleccionado');
          }
        }, {
          text: 'Snapchat',
          icon: 'logo-snapchat',
          cssClass: 'iconSnapchat',
          handler: () => {
            console.log('Youtube seleccionado');
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
