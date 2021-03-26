import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registro-p7',
  templateUrl: './registro-p7.page.html',
  styleUrls: ['./registro-p7.page.scss'],
})
export class RegistroP7Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService
  ) { }

  ngOnInit() {
  }

  contentLoaded = false;
  ionViewWillLeave(){
    this.historiales = [];
    this.frecuenciaR = [];
    this.preAprobacion = [];
    this.cargarHistorial();
    this.cargarFrecuencia();
    this.cargarAprobacion();
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    this.historiales = [];
    this.frecuenciaR = [];
    this.preAprobacion = [];
    this.cargarHistorial();
    this.cargarFrecuencia();
    this.cargarAprobacion();
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }

  historiales: any = [];
  cargarHistorial(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'historial'
      };
      this.provider.postDataHPR(body, 'db_cargarHistorialPrevioRenta.php').subscribe((data) => {
        for (let historial of data.result){
          this.historiales.push(historial);
        }
        resolve(true);
      });
    });
  }

  frecuenciaR: any = [];
  cargarFrecuencia(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'frecuencia-renta'
      };
      this.provider.postDataFRP(body, 'db_cargarFrecuenciaRenta.php').subscribe((data) => {
        for (let frecuencia of data.result){
          this.frecuenciaR.push(frecuencia);
        }
        resolve(true);
      });
    });
  }

  preAprobacion: any = [];
  cargarAprobacion(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'status-aprobacion'
      };
      this.provider.postDataAPR(body, 'db_statusAprobacionRenta.php').subscribe((data) => {
        for (let aprobacion of data.result){
          this.preAprobacion.push(aprobacion);
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
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion(){
    this.router.navigate(['/registrop7r11']);
  }

}
