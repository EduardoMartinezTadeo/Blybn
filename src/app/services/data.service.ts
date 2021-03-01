import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment.prod';

const apiUrlRegistro = environment.apiRegistroURL;
const apiUrlLogin = environment.apiLoginURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;
  responseData: any;
  toast: any;
  rol = 'Blybn';
  constructor(
    public http: HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController
  ) { }

  registrarUsuario(nombreUsuario: string, correoElectronico: string, numTelefono: string, dia: any, mes: any, years: string, sexo: string, contrasena: string, termino: boolean) {
    return this.http.get(`${apiUrlRegistro}?nombreUsuario=${nombreUsuario}&correoElectronico=${correoElectronico}&numTelefono=${numTelefono}&dia=${dia}&mes=${mes}&years=${years}&sexo=${sexo}&contrasena=${contrasena}&termino=${termino}`).pipe(map(
      results => {
        this.responseData = results;
        this.router.navigate(['/login']);
        if (correoElectronico == "" && contrasena == "" && nombreUsuario == "" && numTelefono == "" && dia == "" && mes == "" && years == "" && sexo == "" && contrasena == "") {
          this.toast = this.toastController.create({
            message: '¡Debe completar todos los campos solicitados!',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else if (this.responseData == "Ya hay un registro de este usuario") {
          this.toast = this.toastController.create({
            message: 'Ya hay un registro de este usuario',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else {
          this.storage.set('storage_blybn', this.rol);
          this.navCtrl.navigateRoot(['/dashboard2/menutabs/inicio-menu']);
          this.toast = this.toastController.create({
            message: 'Se ha registrado exitosamente',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        }
      }
    ));
  }

  iniciarSesion(correoElectronico: string, contrasena: string) {
    return this.http.get(`${apiUrlLogin}?correoElectronico=${correoElectronico}&contrasena=${contrasena}`).pipe(map(
      results => {
        this.result = results;
        if (correoElectronico == "" && contrasena == "") {
          this.toast = this.toastController.create({
            message: '¡Debe completar todos los campos solicitados!',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else if (this.result == "¡Correo electronico o contrasena incorrectos!") {
          this.toast = this.toastController.create({
            message: '¡Correo electronico o contrasena incorrectos!',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else if (this.result == "Blybn") {
          this.loadingController.create({
            message: "Espere un momento…",
            spinner: "bubbles",
            translucent: true,
            duration: 2000
          }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
              this.storage.set('storage_blybn', this.result);
              this.navCtrl.navigateRoot(['/dashboard2/menutabs/inicio-menu']);
            });
          });
        } else if (this.result == "Propietario Blybner") {
          this.loadingController.create({
            message: "Espere un momento…",
            spinner: "bubbles",
            translucent: true,
            duration: 2000
          }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
              this.storage.set('storage_blybn', this.result);
              this.navCtrl.navigateRoot(['/dashboard/menutabs/inicio-menu']);
            });
          });
        }
      }
    ));
  }
}
