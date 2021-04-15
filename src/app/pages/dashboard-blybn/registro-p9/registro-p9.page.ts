import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro-p9',
  templateUrl: './registro-p9.page.html',
  styleUrls: ['./registro-p9.page.scss'],
})
export class RegistroP9Page implements OnInit {
  informacionR1: any;
  informacionR2: any;
  informacionR3: any;
  informacionR4: any;
  informacionR5: any;
  informacionR6: any;
  informacionR7: any;
  informacionR8: any;
  informacionR9: any;
  informacionR10: any;  
  informacionR11: any;
  
  constructor(
    private alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {
    this.informacionR1 = {
      registro1: false
    }
    this.informacionR2 = {
      registro2: false
    }
    this.informacionR3 = {
      registro3: false
    }
    this.informacionR4 = {
      registro4: false
    }
    this.informacionR5 = {
      registro5: false
    }
    this.informacionR6 = {
      registro6: false
    }
    this.informacionR7 = {
      registro7: false
    }
    this.informacionR8 = {
      registro8: false
    }
    this.informacionR9 = {
      registro9: false
    }
    this.informacionR10 = {
      registro10: false
    }
    this.informacionR11 = {
      registro11: false
    }
  }

  ngOnInit() {}

  async cancelar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      mode: 'ios',
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
            this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
          },
        },
      ],
    });

    await alert.present();
  }

  
  aceptarContrato() {
    this.informacionR9 = {
      registro9: true
    }
    this.storage.set('registroP9', this.informacionR9).then((res) => {
      this.router.navigateByUrl('/registro-f');
    });
  }


  async rechazarContrato() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Confirmación',
      message: 'Esta seguro de rechazar el contrato, si es así todo el proceso de registro anterior será eliminado...',
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
            this.storage.set('registroP1', this.informacionR1).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP2', this.informacionR2).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP3', this.informacionR3).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP4', this.informacionR4).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP5', this.informacionR5).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP6', this.informacionR6).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP7', this.informacionR7).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP8', this.informacionR8).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP9', this.informacionR9).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP10', this.informacionR10).then((res) => {
              console.log(res);
            });
            this.storage.set('registroP11', this.informacionR11).then((res) => {
              console.log(res);
            }); 
            this.storage.remove('costosPropiedad');
            this.storage.remove('mapaInformacion');
            this.storage.remove('mueblesInformacion');
            this.storage.remove('requisitosDisponibilidad');
            this.storage.remove('requisitosRenta');
            this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
          },
        },
      ],
    });

    await alert.present();
  }
}
