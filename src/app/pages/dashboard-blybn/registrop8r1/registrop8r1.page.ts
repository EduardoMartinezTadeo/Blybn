import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registrop8r1',
  templateUrl: './registrop8r1.page.html',
  styleUrls: ['./registrop8r1.page.scss'],
})
export class Registrop8r1Page implements OnInit {

  constructor(
    private router:Router,
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
  cancelar(){
    this.router.navigate(['/registro-p8']);
  }

  descuentoSemana: number;
  descuentoMes: number;
  informacionR8: any;
  guardarInformacion(){
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
