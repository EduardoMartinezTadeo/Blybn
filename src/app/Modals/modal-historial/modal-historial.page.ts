import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-historial',
  templateUrl: './modal-historial.page.html',
  styleUrls: ['./modal-historial.page.scss'],
})
export class ModalHistorialPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salir() {
    this.modalController.dismiss();
  }

}
