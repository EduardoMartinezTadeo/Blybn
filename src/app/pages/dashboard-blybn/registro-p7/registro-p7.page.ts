import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-p7',
  templateUrl: './registro-p7.page.html',
  styleUrls: ['./registro-p7.page.scss'],
})
export class RegistroP7Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async cancelar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      message: '¿Esta seguro que desea cancelar el registro de la propiedad?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/dashboard2/menutabs2/registrar-propiedad2']);
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion(){
    this.router.navigate(['/registrop8r1']);
  }

}
