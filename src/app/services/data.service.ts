import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


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
    private router: Router
  ) { }

  registrarUsuario(nombreUsuario: string, correoElectronico: string, numTelefono: string, dia: any, mes: any, years: string, sexo: string, contrasena: string) {
    return this.http.get(`${this.apiRegistroURL}?nombreUsuario=${nombreUsuario}&correoElectronico=${correoElectronico}&numTelefono=${numTelefono}&dia=${dia}&mes=${mes}&years=${years}&sexo=${sexo}&contrasena=${contrasena}`).pipe(map(
      results => {
        this.responseData = results;
        this.router.navigate(['/login']);
        if (correoElectronico == "" && contrasena == "" && nombreUsuario == "" && numTelefono == "" && dia == "" && mes == "" && years == "" && sexo == "" && contrasena == "") {
          this.toast = this.toastController.create({
            message: ''
          });
        }
      }
    ));
  }

  iniciarSesion(correoElectronico: string, contrasena: string) {
    return this.http.get(`${this.apiLoginURL}?correoElectronico=${correoElectronico}&contrasena=${contrasena}`).pipe(map(
      results => {
        localStorage.setItem('usuarioData', JSON.stringify(this.result));
        this.router.navigate(['/dashboard/menutabs/inicio-menu']);
      }
    ));
  }
}
