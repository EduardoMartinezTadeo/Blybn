import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registro-p3',
  templateUrl: './registro-p3.page.html',
  styleUrls: ['./registro-p3.page.scss'],
})
export class RegistroP3Page implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService,
    private storage: Storage
  ) {}

  ngOnInit() {
  }

  contentLoaded = false;
  ionViewWillLeave() { 
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500);
  }

  ionViewWillEnter() {
    this.cargarAmenidades();
    this.cargarEspacios();
    this.cargarSeguridad();
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2500);
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
            this.router.navigate([
              '/dashboard2/menutabs2/registrar-propiedad2',
            ]);
          },
        },
      ],
    });

    await alert.present();
  }

  amenidades: any = [];
  cargarAmenidades() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'amenidades',
      };
      this.provider
        .postDataA(body, 'db_cargarServicios.php')
        .subscribe((data) => {
          for (let amenidad of data.result) {
            this.amenidades.push(amenidad);
          }
          resolve(true);
        });
    });
  }

  espacios: any = [];
  cargarEspacios() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'espacios',
      };
      this.provider
        .postDataE(body, 'db_cargarEspacios.php')
        .subscribe((data) => {
          for (let espacio of data.result) {
            this.espacios.push(espacio);
          }
          resolve(true);
        });
    });
  }

  seguridades: any = [];
  cargarSeguridad() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'seguridad',
      };
      this.provider
        .postDataS(body, 'db_cargarSeguridad.php')
        .subscribe((data) => {
          for (let seguridad of data.result) {
            this.seguridades.push(seguridad);
          }
          resolve(true);
        });
    });
  }

  informacionAmenidad = [];
  onClickA(amenidad: any) {
    this.informacionAmenidad.push(amenidad);
  }

  informacionAreas = [];
  onClickAC(espacio: any){
    this.informacionAreas.push(espacio);
  }

  informacionSeguridad = [];
  onClickS(seguridad: any){
    this.informacionSeguridad.push(seguridad);
  }
  informacionR3: any;
  guardarInformacion() {
    this.informacionR3 = {
      amenidades: this.informacionAmenidad,
      areasComunes: this.informacionAreas,
      seguridad: this.informacionSeguridad,
      registro3: true
    }
    this.storage.set('registroP3', this.informacionR3).then((res) => {
       this.router.navigate(['/dashboard2/menutabs2/registrar-propiedad2']);
    });  
  }
}
