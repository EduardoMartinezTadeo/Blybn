import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modal-renta-status',
  templateUrl: './modal-renta-status.page.html',
  styleUrls: ['./modal-renta-status.page.scss'],
})
export class ModalRentaStatusPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private storage: Storage,
    private alertcontroller: AlertController
  ) { }

  ngOnInit() {
  }

  infoPerfil: any;
  ionViewWillEnter(){
    this.storage.get('perfil').then(data =>{
      console.log(data)
    });
  }

  salir(){
    this.modalController.dismiss();
  }


  async cancelarReservacion(){
    const alert = await this.alertcontroller.create({
      header: 'Confirmación',
      mode: 'ios',
      message: '¿Está seguro de cancelar su reservación?',
      buttons: [
        {
          text: 'Abortar operación',
          role: 'cancel',
          cssClass: 'iconCerrar'
        }, {
          text: 'Cancelar reservación',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
