import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service'
import { ModalDetallePage } from '../../Modals/modal-detalle/modal-detalle.page';
import { ModalPromocionesPage } from '../../Modals/modal-promociones/modal-promociones.page';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  contentLoaded = false;
  constructor(
    private provider: ProviderService,
    private modalCtrl: ModalController
  ) { 
    this.server = this.provider.server;
  }
  server: string;
  ngOnInit() {
  }


  ionViewWillEnter() {
    this.promociones = [];
    this.cargarPromociones();
    setTimeout(() => {
      this.contentLoaded = true;
      if(this.promociones.length == 0){
        this.mostrarModalSinResultado();
      } 
    }, 2500);    
  }

  async mostrarModalSinResultado() {
    const modal = await this.modalCtrl.create({
      component: ModalPromocionesPage,
    });
    await modal.present();
  }


  promociones: any = [];
  cargarPromociones(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'promocion'
      };
      this.provider.cargarPropiedadPromocion(body, 'db_CargarPromocionesGenerales.php').subscribe((data) => {
        for (let promocion of data.result){
          this.promociones.push(promocion);
          console.log(this.promociones);
        }
        resolve(true);
      });
    }); 
  }

  showToolbar = false;


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
    const modal = await this.modalCtrl.create({
      component: ModalDetallePage,
      componentProps: {
        datos: this.informacionDetalle
      },
    });
    await modal.present();
  }

  doRefresh(event) {
    this.promociones = [];
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  }
}
