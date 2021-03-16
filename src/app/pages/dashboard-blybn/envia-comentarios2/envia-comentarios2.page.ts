import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-envia-comentarios2',
  templateUrl: './envia-comentarios2.page.html',
  styleUrls: ['./envia-comentarios2.page.scss'],
})
export class EnviaComentarios2Page implements OnInit {
  public favorito: boolean = false;
  public favorito2: boolean = false;

  public dato1: boolean = false;
  public dato2: boolean = false;

  public dato3: boolean = false;

  public dato4: boolean = false;
  public dato5: boolean = false;

  public dato6: boolean = false;
  public dato7: boolean = false;
  public dato8: boolean = false;

  tipoComentario: number;
  utilizacion: number;
  motivo: string;
  comentario: string;
  usuario: string;

  constructor(
    private router: Router,
    private storage: Storage,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private provider: ProviderService,
    private alertCtrl: AlertController) {}

  ngOnInit() {}

  perfilData: any;
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.perfilData = res;
      this.usuario = this.perfilData.bly_usuario;
    });
  }

  salir() {
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }

  onClick() {
    if ((this.favorito = !this.favorito)) {
      this.tipoComentario = 1;
      this.dato1 = true;
      this.dato2 = true;
    } else {
      this.dato1 = false;
      this.dato2 = false;
      this.dato3 = false;
      this.dato4 = false;
      this.dato5 = false;
      this.dato6 = false;
      this.dato7 = false;
      this.dato8 = false;
      this.tipoComentario = 0;
    }
  }

  onClick2() {
    if ((this.favorito2 = !this.favorito2)) {
      this.tipoComentario = 2;
      this.dato1 = true;
      this.dato2 = true;
    } else {
      this.dato1 = false;
      this.dato2 = false;
      this.dato3 = false;
      this.dato4 = false;
      this.dato5 = false;
      this.dato6 = false;
      this.dato7 = false;
      this.dato8 = false;
      this.tipoComentario = 0;
    }
  }

  onClick3() {
    this.dato3 = true;
  }

  ionChange() {
    if (this.utilizacion == 1) {
      this.dato3 = true;
      this.dato4 = true;
      this.dato5 = false;
    } else {
      this.dato3 = true;
      this.dato4 = false;
      this.dato5 = true;
    }
  }

  ionChange1() {
    this.dato6 = true;
    this.dato7 = true;
    this.dato8 = true;
  }

  ionChange2() {
    this.dato6 = true;
    this.dato7 = true;
    this.dato8 = true;
  }

  

  async presentCargaComentario() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 1500,
      spinner: 'bubbles',
    });
    await loading.present();
    setTimeout(() => {
      this.registrarComentarioAvanzado();
    }, 2000);
  }

  toast: any;
  async registrarComentarioAvanzado(){
    let body = {  
      bly_comentario: this.comentario,
      bly_motivoComentario: this.motivo,
      bly_usuario: this.usuario,
      bly_tipoComentario: this.tipoComentario,
      bly_tipoUtilizacion: this.utilizacion
    }   
    if(this.comentario == undefined){
      this.toast = this.toastController.create({
        message: 'El comentario es requerido...',
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }else{
      this.provider.postDataRCA(body, 'db_registrarComentarioAvanzado.php').subscribe(async data => {
        if (data.error) {
          this.toast = this.toastController.create({
            message: 'Ha ocurrido un error, inténtelo más tarde...',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
        } else {
          this.toast = this.toastController.create({
            message: 'Gracias por enviar tus comentarios...',
            duration: 2000
          }).then((toastData) => {
            toastData.present();
          });
          this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
        }
      },(error) => {
        this.presentLoadingServer();
      });
    }
  }

  async presentLoadingServer() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: "bubbles"
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }

  async presentAlertServer() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.router.navigateByUrl('/dashboard2/envia-comentarios2');
        }
      }
      ]
    });
    await alert.present();
  }
}
