import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registrop10',
  templateUrl: './registrop10.page.html',
  styleUrls: ['./registrop10.page.scss'],
})
export class Registrop10Page implements OnInit {

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

  informacionR10C: any;
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
            this.informacionR10C = {
              registro10: false
            }
            this.storage.set('registroP10', this.informacionR10C).then((res) => {
              this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
            });
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
    if(this.huespedes == 1){
      this.confirmacionInformacion();
    } else if (this.habitaciones == 1){
      this.confirmacionInformacion();
    } else if (this.camas == 1){
      this.confirmacionInformacion();
    } else {
      this.storage.set('registroP10', this.informacionR10).then((res) => {
        this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
      });
    }   
  }

  async confirmacionInformacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Confirmación',
      message: 'Esta seguro que la información es correcta...',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.storage.set('registroP10', this.informacionR10).then((res) => {
              this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
            });
          }
        }
      ]
    });

    await alert.present();
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
