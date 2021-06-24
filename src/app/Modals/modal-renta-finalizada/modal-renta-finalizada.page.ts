import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-renta-finalizada',
  templateUrl: './modal-renta-finalizada.page.html',
  styleUrls: ['./modal-renta-finalizada.page.scss'],
})
export class ModalRentaFinalizadaPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }
}
