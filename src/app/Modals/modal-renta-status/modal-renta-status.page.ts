import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modal-renta-status',
  templateUrl: './modal-renta-status.page.html',
  styleUrls: ['./modal-renta-status.page.scss'],
})
export class ModalRentaStatusPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private storage: Storage
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

}
