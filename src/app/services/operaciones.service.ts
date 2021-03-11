import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import {
  ModalController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { Modal6Page } from '../Modals/modal6/modal6.page';
import { Storage } from '@ionic/storage';
import { DetallePerfil2Page } from '../pages/detalle-perfil2/detalle-perfil2.page';
import { DetallePerfilPage } from '../pages/detalle-perfil/detalle-perfil.page';

const apiConsultarPerfilUrl = environment.apiConsultarPerfilURL;
const apiConsultarDatosFacturacion = environment.apiCargarDatosFacturacionURL;
export interface User {
  contrasena: string;
}

@Injectable({
  providedIn: 'root',
})
export class OperacionesService {
  responseData: any;
  result: any;
  toast: any;
  alert: any;
  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private storage: Storage,
    private alertCtrl: AlertController) {}

  consultarPerfil(correoElectronico: string) {
    return this.http
      .get(`${apiConsultarPerfilUrl}?correoElectronico=${correoElectronico}`)
      .pipe(
        map((results) => {
          this.result = results;
          if ((correoElectronico = '')) {
            this.toast = this.toastController
              .create({
                message: '¡Debe completar todos los campos solicitados!',
                duration: 2000,
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (
            this.result == '¡No existe un registro previo de este usuario!'
          ) {
            this.toast = this.toastController
              .create({
                message: '¡No existe un registro previo de este usuario!',
                duration: 2000,
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.storage.set('perfil', this.result);
            this.modalCtrl
              .create({
                component: Modal6Page,
              })
              .then((modal) => {
                modal.present();
                return modal.onDidDismiss();
              });
          }
        })
      );
  }

  dataFacturacion = {
    bly_correoElectronico: 'El correo electrónico es requerido...',
    bly_direccionFiscal: 'La dirección fiscal es requerida...',
    bly_razonSocial: 'La razón social es requerida...',
    bly_rfc: 'El RFC es requerido...',
    bly_statusBtn: 'true'
  }
  consultarDatosFacturacion(id_usuario: string) {
    return this.http
      .get(`${apiConsultarDatosFacturacion}?id_usuario=${id_usuario}`)
      .pipe(
        map((results) => {
          this.result = results;
          if ((id_usuario = '')) {
            this.toast = this.toastController
              .create({
                message: '¡Debe completar todos los campos solicitados!',
                duration: 2000,
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (
            this.result == '¡No existe un registro previo de esta informacion!'
          ) {
            this.alert = this.alertCtrl
              .create({
                cssClass: 'my-custom-class',
                message:
                  '¡No tiene aun información respecto a facturación de pagos te invitamos a registrar dicha información!',
                buttons: [
                  {
                    text: 'Aceptar',
                    handler: () => {
                      this.storage.set('facturacion', this.dataFacturacion);
                      this.modalCtrl.create({
                        component: DetallePerfil2Page
                      }).then((modal) => {
                        modal.present();
                        return modal.onDidDismiss();
                      });
                    },
                  },
                ],
              })
              .then((alertData) => {
                alertData.present();
              });
          } else {
            this.storage.set('facturacion', this.result);
          }
        })
      );
  }

  consultarDatosFacturacionAdmin(id_usuario: string) {
    return this.http
      .get(`${apiConsultarDatosFacturacion}?id_usuario=${id_usuario}`)
      .pipe(
        map((results) => {
          this.result = results;
          if ((id_usuario = '')) {
            this.toast = this.toastController
              .create({
                message: '¡Debe completar todos los campos solicitados!',
                duration: 2000,
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (
            this.result == '¡No existe un registro previo de esta informacion!'
          ) {
            this.alert = this.alertCtrl
              .create({
                cssClass: 'my-custom-class',
                message:
                  '¡No tiene aun información respecto a facturación de pagos te invitamos a registrar dicha información!',
                buttons: [
                  {
                    text: 'Aceptar',
                    handler: () => {
                      this.storage.set('facturacion', this.dataFacturacion);
                      this.modalCtrl.create({
                        component: DetallePerfilPage
                      }).then((modal) => {
                        modal.present();
                        return modal.onDidDismiss();
                      });
                    },
                  },
                ],
              })
              .then((alertData) => {
                alertData.present();
              });
          } else {
            this.storage.set('facturacion', this.result);
          }
        })
      );
  }
}
