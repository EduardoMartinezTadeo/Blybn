import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiRegistroURL = "http://192.168.0.105/server_blybn/api/db_registroUsuario.php";
  apiLoginURL = "http://192.168.0.105/server_blybn/api/db_iniciarSesion.php";
  result: any;
  responseData: any;
  toast: any;
  constructor(
    public http: HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController
  ) { }

  registrarUsuario(nombreUsuario: string, correoElectronico: string, numTelefono: string, dia: any, mes: any, years: string, sexo: string, contrasena: string) {
    return this.http.get(`${this.apiRegistroURL}?nombreUsuario=${nombreUsuario}&correoElectronico=${correoElectronico}&numTelefono=${numTelefono}&dia=${dia}&mes=${mes}&years=${years}&sexo=${sexo}&contrasena=${contrasena}`).pipe(map(
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
        } else if (this.responseData == "Ya hay un registro de este usuario"){
          this.toast = this.toastController.create({
            message: 'Ya hay un registro de este usuario',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else {
          this.router.navigate(['/login']);
          this.toast = this.toastController.create({
            message: 'Se ha registrado exitosamente',
            duration: 2000
          }).then((toastData)=> {
            toastData.present();
          });
        }
      }
    ));
  }

  iniciarSesion(correoElectronico: string, contrasena: string) {
    return this.http.get(`${this.apiLoginURL}?correoElectronico=${correoElectronico}&contrasena=${contrasena}`).pipe(map(
      results => {
        this.result = results;
        if(correoElectronico == "" && contrasena == "") {
          this.toast = this.toastController.create({
            message: '¡Debe completar todos los campos solicitados!',
            duration: 2000
          }).then((toastData) => {
              toastData.present();
          });
        } else if (this.result == "¡Correo electronico o contrasena incorrectos!"){
          this.toast = this.toastController.create({
            message: '¡Correo electronico o contrasena incorrectos!',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else if (this.result == "Blybn"){
          this.loadingController.create({
            duration:2000
          }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
              this.storage.set('storage_blybn', this.result);
              this.navCtrl.navigateRoot(['/dashboard2']);
            });
          });
        } else if (this.result == "Propietario Blybner"){
          this.loadingController.create({
            duration: 2000
          }).then((res)=>{
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
