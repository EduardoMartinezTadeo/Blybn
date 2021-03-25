import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registro-p8',
  templateUrl: './registro-p8.page.html',
  styleUrls: ['./registro-p8.page.scss'],
})
export class RegistroP8Page implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private provider: ProviderService
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
}
