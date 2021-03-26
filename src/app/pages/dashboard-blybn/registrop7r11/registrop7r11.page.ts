import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';


@Component({
  selector: 'app-registrop7r11',
  templateUrl: './registrop7r11.page.html',
  styleUrls: ['./registrop7r11.page.scss'],
})
export class Registrop7r11Page implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService
  ) {}

  ngOnInit() {}

  contentLoaded = false;

  ionViewWillLeave(){
    this.catalogo1 = [];
    this.catalogo2 = [];
    this.catalogo3 = [];
    this.catalogo4 = [];
    this.cargarCatalogo1();
    this.cargarCatalogo2();
    this.cargarCatalogo3();
    this.cargarCatalogo4();
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    this.cargarCatalogo1();
    this.cargarCatalogo2();
    this.cargarCatalogo3();
    this.cargarCatalogo4();
    this.catalogo1 = [];
    this.catalogo2 = [];
    this.catalogo3 = [];
    this.catalogo4 = [];
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }

  async cancelar() {
    this.router.navigate(['/registro-p7']);
  }

  guardarInformacion() {
    this.router.navigate(['/dashboard2/menutabs2/registrar-propiedad2']);
  }

  catalogo1: any = [];
  cargarCatalogo1(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'preaviso'
      };
      this.provider.postDataC1PA(body, 'db_catalogoPreaviso.php').subscribe((data) => {
        for (let preaviso of data.result){
          this.catalogo1.push(preaviso);
        }
        resolve(true);
      });
    });
  }

  catalogo2: any = [];
  cargarCatalogo2(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'horas'
      };
      this.provider.postDataC2H(body, 'db_catalogoHoras.php').subscribe((data) => {
        for (let horas of data.result){
          this.catalogo2.push(horas);
        }
        resolve(true);
      });
    });
  }

  catalogo3: any = [];
  cargarCatalogo3(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'disponibilidad'
      };
      this.provider.postDataC3VD(body, 'db_catalogoVentaDisponibilidad.php').subscribe((data) => {
        for (let disponibilidad of data.result){
          this.catalogo3.push(disponibilidad);
        }
        resolve(true);
      });
    });
  }

  catalogo4: any = [];
  cargarCatalogo4(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'llegadas'
      };
      this.provider.postDataC4L(body, 'db_catalogoVentaDisponibilidad.php').subscribe((data) => {
        for (let llegada of data.result){
          this.catalogo4.push(llegada);
        }
        resolve(true);
      });
    });
  }
}
