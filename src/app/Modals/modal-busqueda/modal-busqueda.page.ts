import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service';
import { ModalDetallePage } from '../modal-detalle/modal-detalle.page';

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

  informacionDetalle: any = [];
  mostrarDetalle(bly_registroPropiedad, bly_usuario){
    this.informacionDetalle = {
      propiedad: bly_registroPropiedad,
      usuario: bly_usuario
    }
    this.mostrarModalResultado();
    console.log(this.informacionDetalle);
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalDetallePage,
      componentProps: {
        datos: this.informacionDetalle
      },
    });
    await modal.present();
  }
}
