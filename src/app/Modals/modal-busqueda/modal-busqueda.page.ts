import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service';
import { ModalDetallePage } from '../modal-detalle/modal-detalle.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

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
    private provider : ProviderService,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private datalocalService: DataLocalService) { 
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

  infoFavoritos(datos: any){
     console.log(datos);
  }
  enFavoritos = false;
  async lanzarMenu() {
  
}
}
