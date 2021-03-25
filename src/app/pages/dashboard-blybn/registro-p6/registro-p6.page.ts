import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registro-p6',
  templateUrl: './registro-p6.page.html',
  styleUrls: ['./registro-p6.page.scss'],
})
export class RegistroP6Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService
  ) { }

  ngOnInit() {
  }

  contentLoaded = false;
  ionViewWillLeave(){
    this.cargarRequisitos();
    this.requisitos = [];
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    this.requisitos = [];
    this.cargarRequisitos();
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }

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
            this.router.navigate(['/dashboard2/menutabs2/registrar-propiedad2']);
            this.requisitos = [];
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion(){
    this.router.navigate(['/registrop6r11']);
    this.requisitos = [];
  }

  requisitos: any = [];
  cargarRequisitos(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'requisitos'
      };
      this.provider.postDataRRP(body, 'db_cargarRequisitos.php').subscribe((data) => {
        for (let requisito of data.result){
          this.requisitos.push(requisito);
        }
        resolve(true);
      });
    });
  }


}
