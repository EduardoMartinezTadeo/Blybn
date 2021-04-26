import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-busqueda-error',
  templateUrl: './modal-busqueda-error.page.html',
  styleUrls: ['./modal-busqueda-error.page.scss'],
})
export class ModalBusquedaErrorPage implements OnInit {

  datos: any = [];
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.datos = this.navParams.get('datos');
    console.log(this.datos);
  }

  salir(){
    this.modalController.dismiss();
  }
}
