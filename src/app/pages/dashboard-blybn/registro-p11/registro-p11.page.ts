import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';


@Component({
  selector: 'app-registro-p11',
  templateUrl: './registro-p11.page.html',
  styleUrls: ['./registro-p11.page.scss'],
})
export class RegistroP11Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService
  ) { }


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cargarMuebles();
  }

  muebles: any = [];
  cargarMuebles() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'muebles'
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
            this.router.navigate(['/dashboard2/registrar-propiedad2']);
            this.muebles = [];
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion(){
    this.router.navigate(['/registro-p2r11']);
    this.muebles = [];
  }
 

  incrementar(mueble: any){
    if(mueble.bly_cantidadMuebles == undefined){
      mueble.bly_cantidadMuebles = 1;
    } else if(mueble.bly_cantidadMuebles != undefined){
      ++mueble.bly_cantidadMuebles;
    }
  }

  disminuir(mueble: any){
    if(mueble.bly_cantidadMuebles == undefined){
      mueble.bly_cantidadMuebles = 0;
    } else if(mueble.bly_cantidadMuebles != undefined && mueble.bly_cantidadMuebles > 0){
      --mueble.bly_cantidadMuebles;
    }
  }

  onChange(){
    
  }

}
