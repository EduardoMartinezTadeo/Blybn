import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-registro-p11',
  templateUrl: './registro-p11.page.html',
  styleUrls: ['./registro-p11.page.scss'],
})
export class RegistroP11Page implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService,
    private storage: Storage,
    private toastController: ToastController
  ) {}
  toast: any;

  ngOnInit() {}

  contentLoaded = false;
  ionViewWillLeave() {
    this.cargarMuebles();
    this.informacionMueble = [];
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500);
  }

  ionViewWillEnter() {
    this.cargarMuebles();
    this.informacionMueble = [];
    setTimeout(() => {
      this.contentLoaded = true;
      console.log(this.muebles);
    }, 2500);
  }

  muebles: any = [];
  cargarMuebles() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'muebles',
      };
      this.provider
        .postDataM(body, 'db_cargarMuebles.php')
        .subscribe((data) => {
          for (let mueble of data.result) {
            this.muebles.push(mueble);
          }
          resolve(true);
        });
    });
  }

  informacionR11C: any;
  async cancelar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      message: '¿Esta seguro que desea cancelar el registro de la propiedad?',
      mode: 'ios',
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
            this.informacionR11C = {
              registro11: false
            }
            this.storage.set('registroP11', this.informacionR11C).then((res) => {
              this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
              this.muebles = [];
              this.informacionMueble = [];
            });          
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion() {
    if(this.informacionMueble.length == 0){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar al menos un tipo de cama...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.storage.set('mueblesInformacion', this.informacionMueble).then((res) => {
        this.router.navigate(['/registro-p2r11']);
        this.muebles = [];
      });
    }
  }

  incrementar(mueble: any) {
    if (mueble.bly_cantidadMuebles == undefined) {
      mueble.bly_cantidadMuebles = 1;
    } else if (mueble.bly_cantidadMuebles != undefined) {
      ++mueble.bly_cantidadMuebles;
    }
  }

  disminuir(mueble: any) {
    if (mueble.bly_cantidadMuebles == undefined) {
      mueble.bly_cantidadMuebles = 0;
    } else if (
      mueble.bly_cantidadMuebles != undefined &&
      mueble.bly_cantidadMuebles > 0
    ) {
      --mueble.bly_cantidadMuebles;
    }
  }

  informacionMueble = [];
  onClick(mueble: any) {
    this.informacionMueble.push(mueble);
  }
}
