import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';


@Component({
  selector: 'app-registrop7r11',
  templateUrl: './registrop7r11.page.html',
  styleUrls: ['./registrop7r11.page.scss'],
})
export class Registrop7r11Page implements OnInit {
  constructor(
    private router: Router,
    private provider: ProviderService,
    private storage: Storage
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


  preaviso: string;
  ionChange(event) {
    this.preaviso = event.detail.value;
    console.log(this.preaviso);
  }

  tiempoSalidaHuesped: string;
  ionChange2(event) {
    this.tiempoSalidaHuesped = event.detail.value;
    console.log(this.tiempoSalidaHuesped);
  }

  limiteReservacion: string;
  ionChange3(event) {
    this.limiteReservacion = event.detail.value;
    console.log(this.limiteReservacion);
  }

  ventanaDisponibilidad: string;
  ionChange4(event) {
    this.ventanaDisponibilidad = event.detail.value;
    console.log(this.ventanaDisponibilidad);
  }

  llegadadespues: string;
  ionChange5(event) {
    this.llegadadespues = event.detail.value;
    console.log(this.llegadadespues);
  }
  
  llegadaantes: string;
  ionChange6(event) {
    this.llegadaantes = event.detail.value;
    console.log(this.llegadaantes);
  }
  
  salidaantes: string;
  ionChange7(event) {
    this.salidaantes = event.detail.value;
    console.log(this.salidaantes);
  }

  fechainiciald: string;
  fechafinald: string;

  fechainicialnd: string;
  fechafinalnd: string;

  informacionR7: any;
  guardarInformacion() {
    this.informacionR7 = {
      preaviso: this.preaviso,
      tiempoSalidaHuesped: this.tiempoSalidaHuesped,
      limiteReservacion: this.limiteReservacion,
      ventanaDisponibilidad: this.ventanaDisponibilidad,
      llegadaAntes: this.llegadaantes,
      llegadaDespues: this.llegadadespues,
      salidaAntes: this.salidaantes,
      fechainicialD: this.fechainiciald,
      fechafinalD: this.fechafinald,
      fechainicialND: this.fechainicialnd,
      fechafinalND: this.fechafinalnd,
      registro7: true
    }
    this.storage.set('registroP7', this.informacionR7).then((res) => {
      this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
    });
  }
}
