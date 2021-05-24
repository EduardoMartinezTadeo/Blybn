import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-modal-pago-exitoso',
  templateUrl: './modal-pago-exitoso.page.html',
  styleUrls: ['./modal-pago-exitoso.page.scss'],
})
export class ModalPagoExitosoPage implements OnInit {
  constructor(
    private provider: ProviderService,
    private storage: Storage,
    private toastController: ToastController,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  registrarServicio() {}

  bly_propiedad: number;
  bly_usuario: number;
  toast: any;
  informacionHistorial: any;
  informacionPerfil: any;
  registrarHistorialServicio() {
    this.storage.get('informacionPromocion').then((res) => {
      this.informacionHistorial = res;
      this.bly_propiedad = this.informacionHistorial.propiedad;
      this.storage.get('perfil').then((respuesta) => {});
    });
    let body = {
      aksi: 'imagenPropiedad',
    };
    this.provider
      .postDataRFP(body, 'db_registrarFotosPropiedad.php')
      .subscribe((data) => {
        var alert = data.msg;
        if (data.success) {
          this.toast = this.toastController
            .create({
              message: 'Se ha verificado su fotografía...',
              duration: 3000,
              mode: 'ios',
            })
            .then((toastData) => {
              toastData.present();
            });
        } else {
          this.toast = this.toastController
            .create({
              message: 'Ha ocurrido un error...',
              duration: 3000,
              mode: 'ios',
            })
            .then((toastData) => {
              toastData.present();
            });
        }
      });
  }

  cerrar() {
    this.modalController.dismiss();
  }
}
