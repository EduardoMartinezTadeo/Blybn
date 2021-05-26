import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';
import { ModalresenaPage } from '../../../Modals/modalresena/modalresena.page';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';

@Component({
  selector: 'app-historial-renta',
  templateUrl: './historial-renta.page.html',
  styleUrls: ['./historial-renta.page.scss'],
})
export class HistorialRentaPage implements OnInit {

  public noRentas: boolean = false;
  constructor(
    private router: Router,
    private storage: Storage,
    private provider: ProviderService,
    private modalController: ModalController
  ) {
    this.server = this.provider.server;
  }
  server: string;
  ngOnInit() {}

  responseData: any;
  bly_usuario: number;
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.responseData = res;
      this.bly_usuario = this.responseData.bly_usuario;
      this.cargarHistorial(this.bly_usuario);
    });
  }

  historial: any = [];
  cargarHistorial(data) {
    return new Promise((resolve) => {
      let body = {
        aksi: 'historial-renta',
        bly_usuario: data,
      };
      this.provider
        .cargarHistorialRentaPropiedades(body, 'db_cargarHistorialRenta.php')
        .subscribe((data) => {
          this.historial = data.result;
          if (this.historial == 0) {
            this.noRentas = true;
          }
        });
    });
  }
  salir() {
    this.historial = [];
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

  informacionDetalle: any = [];
  mostrarDetalle(bly_registroPropiedad, bly_duenoPropiedad) {
    this.informacionDetalle = {
      propiedad: bly_registroPropiedad,
      usuario: bly_duenoPropiedad,
    };
    this.mostrarModalResultado();
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalresenaPage,
      componentProps: {
        datos: this.informacionDetalle,
      },
    });
    await modal.present();
  }

  informacionChat: any = [];
  mostrarChat(bly_duenoPropiedad) {
    this.informacionChat = {
      usuario: bly_duenoPropiedad,
    };
    this.mostrarModalChat();
  }

  async mostrarModalChat() {
    const modal = await this.modalController.create({
      component: DetalleMensajePage,
      componentProps: {
        datos: this.informacionChat,
      },
    });
    await modal.present();
  }
}
