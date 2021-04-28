import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service';
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
    this.promociones = [];
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
        }
        resolve(true);
      });
    });
  }

  showToolbar = false;


  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }
}
