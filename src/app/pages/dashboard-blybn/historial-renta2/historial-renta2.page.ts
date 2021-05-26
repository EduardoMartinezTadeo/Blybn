import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';
import { ModalresenaPage } from '../../../Modals/modalresena/modalresena.page';

@Component({
  selector: 'app-historial-renta2',
  templateUrl: './historial-renta2.page.html',
  styleUrls: ['./historial-renta2.page.scss'],
})
export class HistorialRenta2Page implements OnInit {
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
    this.noRentas = false;
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
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
}
