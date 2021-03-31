import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registro-p1',
  templateUrl: './registro-p1.page.html',
  styleUrls: ['./registro-p1.page.scss'],
})
export class RegistroP1Page implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService,
    private storage: Storage
  ) {}

  ngOnInit() {}

  ionViewWillLeave(){
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }
  
  tipoPropiedad: string;
  tipoAlojamiento: string;
  tipoExclusividad: string;
  tipoAventura: string;

  contentLoaded = false;
  ionViewWillEnter() {    
    this.alojamientos = [];
    this.aventuras = [];
    this.propiedades = [];
    this.exclusividad = [];
    this.cargarPropiedades();
    this.cargarAlojamiento();
    this.cargarExclusividad();
    this.cargarAventuras();
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2500); 
  }

  exclusividad: any = [];
  cargarExclusividad(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'exclusividadPropiedad'
      };
      this.provider.postDataTE(body, 'db_cargarExclusividadPropiedad.php').subscribe((data) => {
        for (let exclusivo of data.result){
          this.exclusividad.push(exclusivo);
        }
        resolve(true);
      });
    });
  }

  alojamientos: any = [];
  cargarAlojamiento(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'alojamiento'
      };
      this.provider.postDataTA(body, 'db_cargarTipoAlojamiento.php').subscribe((data) => {
        for (let alojamiento of data.result){
          this.alojamientos.push(alojamiento);
        }
        resolve(true);
      });
    });
  }

  aventuras: any = [];
  cargarAventuras(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'aventura'
      };
      this.provider.postDataAv(body, 'db_cargarTipoAventura.php').subscribe((data) => {
        for (let aventura of data.result){
          this.aventuras.push(aventura);
        }
        resolve(true);
      });
    });
  }

 
  propiedades: any = [];
  limit: number = 10;
  start: number = 0;
  cargarPropiedades() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'propiedades',
        start: this.start,
        limit: this.limit,
      };
      this.provider
        .postDataTP(body, 'db_cargarTipoPropiedades.php')
        .subscribe((data) => {
          for (let propiedad of data.result) {
            this.propiedades.push(propiedad);
          }
          resolve(true);
        });
    });
  }

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
            this.exclusividad = [];
            this.router.navigate(['/dashboard2/menutabs2/registrar-propiedad2']);
          },
        },
      ],
    });

    await alert.present();
  }

  
  descripcion: any;
  informacion: string;
  ionChange(event) {
    this.tipoPropiedad = event.detail.value;
    return new Promise((resolve) => {
      let body = {
        aksi: 'Desc_propiedades',
        bly_tipoPropiedad: this.tipoPropiedad,
      };
      this.provider
        .postDataDTP(body, 'db_cargarDescripcionPropiedad.php')
        .subscribe((data) => {
          this.descripcion = data;  
          this.informacion = this.descripcion.bly_descripcionPropiedad;
        });
    });   
  }

  descripcionAlojamiento: any;
  informacionAlojamiento: string;
  ionChangeA(event) {
    this.tipoAlojamiento = event.detail.value;  
    let body = {
      aksi: 'Desc_alojamiento',
      bly_tipoAlojamiento: this.tipoAlojamiento
    }
    this.provider.postDataDTA(body, 'db_cargarDescripcionAlojamiento.php').subscribe((data) => {
      this.descripcionAlojamiento = data;
      this.informacionAlojamiento = this.descripcionAlojamiento.bly_descripcionAlojamiento;
    });
  }

  ionChangeT(event){
    this.tipoAventura = event.detail.value;
  }

  valores: any;
  onClick( exclusivo: any ) {
    this.valores = exclusivo.bly_exclusividadHospedaje;
  }


  informacionR1: any;
  guardarInformacion(){
   this.informacionR1 = {
      propiedad: this.tipoPropiedad,
      alojamiento: this.tipoAlojamiento,
      exclusividad: this.valores,
      aventura: this.tipoAventura,
      registro1: true
    }
    this.storage.set('registroP1', this.informacionR1).then((res) => {
      this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
    });
  }

 
}
