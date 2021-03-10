import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment.prod';

const apiUrlRegistro = environment.apiRegistroURL;
const apiUrlLogin = environment.apiLoginURL;
const apiUrlFacturacion = environment.apiRegistroFacturacionURL;
const apiUrlTerminosCondiciones = environment.apiConsultarTerminosCondicionesURL;
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
    private navCtrl: NavController,
    private modalCtrl: ModalController
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
          this.storage.set('perfil', this.responseData);
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

  registrarFacturacion(razonSocial: string, rfc: string, direccionFiscal: string, correoElectronico: string, id: string){
    return this.http.get(`${apiUrlFacturacion}?razonSocial=${razonSocial}&rfc=${rfc}&direccionFiscal=${direccionFiscal}&correoElectronico=${correoElectronico}&id=${id}`).pipe(map (
      results => {
        this.result = results;
        if(razonSocial == "" && rfc == "" && direccionFiscal == "" && correoElectronico == "" && id == "") {
          this.toast = this.toastController.create({
            message: '¡Debe completar todos los campos solicitados!',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else if(this.result == "Ya hay un registro de este RFC en otro usuario verifique la informacion"){
          this.toast = this.toastController.create({
            message: '¡Ya hay un registro de este RFC en otro usuario verifique la información!',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else {
          this.storage.set('facturacion', this.result);
          this.toast = this.toastController.create({
            message: 'Se ha registrado exitosamente la información',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
          this.modalCtrl.dismiss();
        }
      } 
    ));
  }

 
  TerminosCondiciones(){
    return this.http.get(apiUrlTerminosCondiciones);
  }
}
