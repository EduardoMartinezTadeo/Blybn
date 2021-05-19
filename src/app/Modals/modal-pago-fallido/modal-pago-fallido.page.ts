import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagoPage } from '../modal-pago/modal-pago.page';

@Component({
  selector: 'app-modal-pago-fallido',
  templateUrl: './modal-pago-fallido.page.html',
  styleUrls: ['./modal-pago-fallido.page.scss'],
})
export class ModalPagoFallidoPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async intentarPago() {
    const modal = await this.modalController.create({
      component: ModalPagoPage,
    });
    await modal.present();
  }
}
