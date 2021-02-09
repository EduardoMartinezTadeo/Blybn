import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  forgot = {
    correo: ''
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(formulario);
  }

  onLogin() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/login');
  }

  onRegister() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/register');
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña',
      subHeader: 'Restablecer contraseña',
      message: '<p style="color:#0000">Se ha enviado un correo electronico, con las instrucciones para recuperar su contraseña.</p>',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.modalCtrl.dismiss();
        }
      }]
    });

    await alert.present();
  }

}
