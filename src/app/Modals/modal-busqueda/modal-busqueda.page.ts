import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
    private modalController: ModalController,
    private provider : ProviderService
  ) { 
    this.server = this.provider.server;
  }

  ngOnInit() {
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
    console.log(this.informacionDetalle);
    this.mostrarModalResultado();    
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
