import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';
import { ModalGananciaPage } from '../../../Modals/modal-ganancia/modal-ganancia.page';

@Component({
  selector: 'app-mis-propiedades',
  templateUrl: './mis-propiedades.page.html',
  styleUrls: ['./mis-propiedades.page.scss'],
})
export class MisPropiedadesPage implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
    private provider: ProviderService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) {
    this.server = this.provider.server;
  }

  ngOnInit() {}
  server: string;
  informacionPerfil: any;
  bly_usuario: number;
  imagen: string;
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.informacionPerfil = res;
      this.bly_usuario = this.informacionPerfil.bly_usuario;
      this.cargarPropiedad();
    });
  }

  propiedades: any = [];
  cargarPropiedad() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'propiedadUsuario',
        bly_usuario: this.bly_usuario,
      };
      this.provider
        .postDataCPUF(body, 'db_cargarPropiedadesUsuario.php')
        .subscribe(
          (data) => {
            for (let exclusivo of data.result) {
              this.propiedades.push(exclusivo);
              console.log(this.propiedades);
            }
            resolve(true);
          },
          (error) => {
            this.presentLoadingServer();
          }
        );
    });
  }
  salir() {
    this.propiedades = [];
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }

  registrarPropiedad() {
    this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
  }

  async registrarCasaNueva() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Desea registrar una propiedad nueva?',
      buttons: [
        {
          text: 'No, en otro momento',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Si, continuar',
          handler: () => {
            this.registrarPropiedad();
          },
        },
      ],
    });

    await alert.present();
  }

  mostrarDetalle(bly_registroPropiedad, bly_usuario) {
    this.router.navigate([
      '/detalle-propiedades/' + bly_registroPropiedad + '/' + bly_usuario,
    ]);
  }

  async presentAlertServer() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexi??n!!!',
      mode: 'ios',
      buttons: [
        {
          text: 'Reintentar',
          handler: () => {
            this.router.navigateByUrl('/offline');
          },
        },
      ],
    });
    await alert.present();
  }

  async presentLoadingServer() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }

  doRefresh(event) {
    this.propiedades = [];
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  }

  informacionGanancia: any;
  ganancia(ganancia: any) {
    let body = {
      aksi: 'ingresos',
      bly_propiedad: ganancia,
    };
    this.provider
      .cargarIngresosPropiedad(body, 'db_cargarIngresos.php')
      .subscribe((data) => {
        this.informacionGanancia = data;
        this.mostrarModalResultado();
      });
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalGananciaPage,
      componentProps: {
        datos: this.informacionGanancia,
      },
    });
    await modal.present();
  }
}
