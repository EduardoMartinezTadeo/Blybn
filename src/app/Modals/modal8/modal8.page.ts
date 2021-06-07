import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from 'src/app/services/provider.service';
import { Modal9Page } from '../modal9/modal9.page';
import { Modal10Page } from '../modal10/modal10.page';

@Component({
  selector: 'app-modal8',
  templateUrl: './modal8.page.html',
  styleUrls: ['./modal8.page.scss'],
})
export class Modal8Page implements OnInit {
  constructor(
    private storage: Storage,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private postPvdr: ProviderService,
    private acRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) {}

  bly_correoElectronico: string = '';
  bly_contrasena: string = '';
  confirmContrasena: string = '';
  correo: string;
  datosPerfil: any;
  user: string;
  ionViewDidEnter() {
    this.storage.get('perfil').then((res) => {
      this.datosPerfil = res;
      this.user = this.datosPerfil.bly_nombre;
      this.correo = this.datosPerfil.bly_correoElectronico;
    });
  }

  ngOnInit() {}

  cerrar() {
    this.modalCtrl.dismiss();
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
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.cerrar();
          },
        },
      ],
    });

    await alert.present();
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

  async openModal9() {
    const presentModel = await this.modalCtrl.create({
      component: Modal9Page,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal1'
    });

    presentModel.onWillDismiss().then((data)=>{
    });
    
    return await presentModel.present();
  }

  async openModal10() {
    const presentModel = await this.modalCtrl.create({
      component: Modal10Page,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal1'
    });

    presentModel.onWillDismiss().then((data)=>{
    });
    
    return await presentModel.present();
  }

  responseData: any;
  async recuperarContrasena(){
    if( this.bly_correoElectronico != this.correo){
      this.presentToast("El correo electrónico no es correcto...");
    }
    else if ( this.bly_contrasena != this.confirmContrasena) {
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
          const toast = await this.toastCtrl.create({
            message: 'Se ha restablecido tu contraseña correctamente',
            mode: 'ios',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alert,
            mode: 'ios',
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
      mode: 'ios',
      cssClass: 'toast-scheme'
    });
    toast.present();
  }
}
