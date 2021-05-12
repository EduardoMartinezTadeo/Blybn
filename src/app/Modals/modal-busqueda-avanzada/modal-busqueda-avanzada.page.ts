import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-busqueda-avanzada',
  templateUrl: './modal-busqueda-avanzada.page.html',
  styleUrls: ['./modal-busqueda-avanzada.page.scss'],
})
export class ModalBusquedaAvanzadaPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

}
