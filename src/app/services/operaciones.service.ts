import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ModalController, ToastController } from '@ionic/angular';
import { Modal6Page } from '../Modals/modal6/modal6.page';
import { Storage } from '@ionic/storage';

const apiConsultarPerfilUrl = environment.apiConsultarPerfil;

export interface User {
  contrasena: string;
}

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  responseData: any;
  result: any;
  toast: any;

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private storage: Storage) { }

  consultarPerfil(correoElectronico: string) {
    return this.http.get(`${apiConsultarPerfilUrl}?correoElectronico=${correoElectronico}`).pipe(map(
      results => {
      this.result = results;
      if( correoElectronico = "" ) {
        this.toast = this.toastController.create({
          message: '¡Debe completar todos los campos solicitados!',
          duration: 2000
        }).then((toastData) => {
          toastData.present();
        });
      } else if (this.result == "¡No existe un registro previo de este usuario!"){
        this.toast = this.toastController.create({
          message: '¡No existe un registro previo de este usuario!',
          duration: 2000
        }).then((toastData) => {
          toastData.present();
        });
      } else {
        this.storage.set('perfil', this.result);
        this.modalCtrl.create({
          component: Modal6Page
        }).then(modal => {
          modal.present();
          return modal.onDidDismiss();
        });
      }      
    }
    ));
  }
}

