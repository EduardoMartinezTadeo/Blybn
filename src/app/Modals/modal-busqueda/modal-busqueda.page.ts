import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-modal-busqueda',
  templateUrl: './modal-busqueda.page.html',
  styleUrls: ['./modal-busqueda.page.scss'],
})
export class ModalBusquedaPage implements OnInit {
  datos: any = [];
  server: string;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private provider : ProviderService
  ) { 
    this.server = this.provider.server;
  }

  ngOnInit() {
    this.datos = this.navParams.get('datos');
    console.log(this.datos);
  }

  salir(){
    this.modalController.dismiss();
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }
}
