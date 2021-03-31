import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-registro-p10',
  templateUrl: './registro-p10.page.html',
  styleUrls: ['./registro-p10.page.scss'],
})
export class RegistroP10Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  contentLoaded = false;
  ionViewWillLeave(){
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {    
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2500); 
  }
 

  huespedes = 1;
  huesped = "16+";
  habitaciones = 1;
  camas = 1;

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

  informacionR10: any;
  guardarInformacion(){
    this.informacionR10 = {
      huespedes: this.huespedes,
      habitaciones: this.habitaciones,
      camas: this.camas,
      registro10: true
    }
    this.storage.set('registroP10', this.informacionR10).then((res) => {
      this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
    });
  }

  incrementarHuespedes(){
    if(this.huespedes < 16) {
      this.huespedes ++;
    }
  }

  decrementarHuespedes(){
    if (this.huespedes > 1){
      this.huespedes --;
    }
  }

  incrementarHabitaciones(){
    if(this.habitaciones < 16){
      this.habitaciones ++;
    }
  }

  decrementarHabitaciones(){
    if(this.habitaciones > 1){
      this.habitaciones --;
    }
  }

  incrementarCamas(){
    if(this.camas < 16){
      this.camas ++;
    }
  }

  decrementarCamas(){
    if(this.camas > 1){
      this.camas --;
    }
  }
}
