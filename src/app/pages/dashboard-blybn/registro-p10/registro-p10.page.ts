import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-p10',
  templateUrl: './registro-p10.page.html',
  styleUrls: ['./registro-p10.page.scss'],
})
export class RegistroP10Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }


  huespedes = 1;
  huesped = "16+";
  habitaciones = 1;
  camas = 1;

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
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion(){
    this.router.navigate(['/dashboard2/registrar-propiedad2']);
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
