import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registrop8',
  templateUrl: './registrop8.page.html',
  styleUrls: ['./registrop8.page.scss'],
})
export class Registrop8Page implements OnInit {

  toast: any;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private provider: ProviderService,
    private storage: Storage,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  contentLoaded = false;
  ionViewWillLeave(){
    this.cargarMoneda();
    this.monedas = [];
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }


  ionViewWillEnter() {
    this.cargarMoneda();
    this.monedas = [];
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }
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
            this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
          },
        },
      ],
    });

    await alert.present();
  }

  monedas: any = [];
  cargarMoneda(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'moneda'
      };
      this.provider.postDataMn(body, 'db_cargarMonedaNacional.php').subscribe((data) => {
        for (let moneda of data.result){
          this.monedas.push(moneda);
        }
        resolve(true);
      });
    });
  }

  precioBase: number;
  costoLimpieza: number;

  tipoMoneda: string;
  ionChange(event) {
    this.tipoMoneda = event.detail.value;
  }

  costosPropiedad: any;
  guardarInformacion(){
    if(this.precioBase == 0 || this.precioBase == undefined){
      this.toast = this.toastController.create({
        message: 'Debe establecer un precio de renta...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    }else if(this.costoLimpieza == 0 || this.costoLimpieza == undefined){
      this.toast = this.toastController.create({
        message: 'Debe establecer un costo de limpieza superior a 0...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if (this.tipoMoneda == "" || this.tipoMoneda == undefined) {
      this.toast = this.toastController.create({
        message: 'Debe seleccionar un tipo de moneda...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.costosPropiedad = {
        precioBase: this.precioBase,
        precioLimpieza: this.costoLimpieza,
        tipoMoneda: this.tipoMoneda
      }
      this.storage.set('costosPropiedad', this.costosPropiedad).then((res) => {
        this.router.navigate(['/registro-p8r1']);
      });
    }  
  }
}
