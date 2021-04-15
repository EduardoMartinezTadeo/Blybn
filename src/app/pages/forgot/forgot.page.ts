import { Component, OnInit} from '@angular/core';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OperacionesService } from '../../services/operaciones.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(
    private modalCtrl: ModalController, 
    private router: Router, 
    public alertCtrl: AlertController,
    public operacionesService: OperacionesService,
    private loading: LoadingController) { }

  ngOnInit() {    
  }

  data = {
    correoElectronico: ''
  }
  responseData: any;

  cerrar() {
    this.modalCtrl.dismiss();
  }

  onLogin() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/login');
  }

  onRegister() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/register');
  }

  async presentAlertServer() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña',
      mode: 'ios',
      subHeader: 'Restablecer contraseña',
      message: '<p style="color:#0000">¿Está a punto de restaurar su contraseña desea continuar?</p>',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: (blah) => {
          this.cerrar();
        }
      }, {
        text: 'Continuar',
        handler: () => {
          this.cerrar();
          this.operacionesService.consultarPerfil(this.data.correoElectronico).subscribe(data => {
            this.responseData = data;
          },(error) => {
            this.presentLoadingServerOffline();
          });          
        } 
      }]
    });
    await alert.present();
  }

  async presentAlertServerOffline() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      mode: 'ios',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.modalCtrl.create({
            component: ForgotPage
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
          });
        }
      }]
    });
    await alert.present();
  }

  async presentLoadingServerOffline() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: "bubbles",
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServerOffline();
    }, 2000);
  }

  async presentLoadingServer() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      duration: 1000,
      spinner: "bubbles",
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 1500);
  }

  async presentCerrarForgot() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar Operación',
      mode: 'ios',
      message: '¿Está seguro de abortar esta operación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.cerrar();
          }
        }
      ]
    });

    await alert.present();
  }
}
