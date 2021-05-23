import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pago-fallido',
  templateUrl: './modal-pago-fallido.page.html',
  styleUrls: ['./modal-pago-fallido.page.scss'],
})
export class ModalPagoFallidoPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async intentarPago() {
    this.modalController.dismiss();
  }
}
