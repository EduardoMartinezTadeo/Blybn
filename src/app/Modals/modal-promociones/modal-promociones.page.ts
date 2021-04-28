import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-promociones',
  templateUrl: './modal-promociones.page.html',
  styleUrls: ['./modal-promociones.page.scss'],
})
export class ModalPromocionesPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }
}
