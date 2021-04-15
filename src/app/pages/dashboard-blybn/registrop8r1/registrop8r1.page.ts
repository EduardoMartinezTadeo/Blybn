import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registrop8r1',
  templateUrl: './registrop8r1.page.html',
  styleUrls: ['./registrop8r1.page.scss'],
})
export class Registrop8r1Page implements OnInit {

  toast: any;
  constructor(
    private router:Router,
    private storage: Storage,
    private toastController: ToastController
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
  cancelar(){
    this.router.navigate(['/registro-p8']);
  }

  descuentoSemana: number;
  descuentoMes: number;
  informacionR8: any;
  guardarInformacion(){
    if( this.descuentoSemana == 0 || this.descuentoSemana == undefined){
      this.toast = this.toastController.create({
        message: 'Debe configurar el descuento por semana...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if ( this.descuentoMes == 0 || this.descuentoMes == undefined){
      this.toast = this.toastController.create({
        message: 'Debe configurar el descuento por mes...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.informacionR8 = {
        descuentoSemanal: this.descuentoSemana,
        descuentoMensual: this.descuentoMes,
        registro8: true
      }
      this.storage.set('registroP8', this.informacionR8).then((res) => {
        this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
      });
    }   
  }

}
