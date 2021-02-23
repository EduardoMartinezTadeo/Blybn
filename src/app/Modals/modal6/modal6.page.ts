import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal6',
  templateUrl: './modal6.page.html',
  styleUrls: ['./modal6.page.scss'],
})

export class Modal6Page implements OnInit {
  constructor(
    private storage: Storage,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private postPvdr: ProviderService,
    private acRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) { }

  bly_correoElectronico: string = "";
  bly_contrasena: string = "";
  confirmContrasena: string = "";

  datosPerfil: any;
  ionViewDidEnter(){
    this.datosPerfil = [];
    this.storage.forEach((data)=> {
      this.datosPerfil.push(data);
    });
  }
  

  ngOnInit() {
    this.acRoute.params.subscribe((data: any) => {
      this.bly_correoElectronico = data.bly_correoElectronico;
      this.bly_contrasena = data.bly_contrasena;
      console.log(data);
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
    this.storage.remove('perfil');
  }

  showPassword = false;
  passwordToggleIcon = 'eye';

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  showPasswordcf = false;
  passwordToggleIconcf = 'eye';

  togglePasswordcf(): void {
    this.showPasswordcf = !this.showPasswordcf;
    if (this.passwordToggleIconcf == 'eye') {
      this.passwordToggleIconcf = 'eye-off';
    } else {
      this.passwordToggleIconcf = 'eye';
    }
  }
  responseData: any;
  async recuperarContrasena(){
    if ( this.bly_contrasena != this.confirmContrasena) {
      this.presentToast("Las contraseñas no coinciden...");
    } else {
      let body = {
        aksi: 'actualizar',
        bly_correoElectronico: this.bly_correoElectronico,
        bly_contrasena: this.bly_contrasena
      };
      this.postPvdr.postData(body, 'db_actualizarContrasena.php').subscribe(async data => {
        var alert = data.msg;
        if(data.success){
          this.modalCtrl.dismiss();
          this.storage.remove('perfil');
          const toast = await this.toastCtrl.create({
            message: 'Se ha restablecido tu contraseña correctamente',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alert,
            duration: 2000
          });
        }
      });
    }
  }

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      cssClass: 'toast-scheme'
    });
    toast.present();
  }

  async presentCerrarForgot() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar Operación',
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
