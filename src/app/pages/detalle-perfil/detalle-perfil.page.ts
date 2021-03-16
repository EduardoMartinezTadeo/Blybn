import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OperacionesService } from 'src/app/services/operaciones.service';
import { Modal4Page } from '../../Modals/modal4/modal4.page';
import { Modal5Page } from '../../Modals/modal5/modal5.page';
import { Modal8Page } from '../../Modals/modal8/modal8.page';
import { DataService } from '../../services/data.service';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.page.html',
  styleUrls: ['./detalle-perfil.page.scss'],
})
export class DetallePerfilPage implements OnInit {
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private storage: Storage,
    private alertController: AlertController,
    private loading: LoadingController,
    private toastCtrl: ToastController,
    private dataService: DataService,
    private providerService: ProviderService,
    private service: OperacionesService,
    private actionSheetController: ActionSheetController
  ) {}

  showPassword = false;
  passwordToggleIcon = 'eye';

  public ocultar2: boolean = false;
  public ocultar1: boolean = false;
  public ocultar3: boolean = false;

  public dato1: boolean = false;
  public dato2: boolean = false;
  public dato3: boolean = false;
  public dato4: boolean = false;

  public dato5: boolean = false;
  public dato6: boolean = false;
  public dato7: boolean = false;
  public dato8: boolean = false;

  ngOnInit() {}

  usuario: string;
  correo: string;
  numeroTelefono: string;
  contrasena: string;
  id: string;
  perfilData: any;
  facturacionData: any;
  statusBtn: string;
  facturacion = {
    razonSocial: '',
    rfc: '',
    direccionFiscal: '',
    correoElectronico: '',
  };
  responseData: any;
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.perfilData = res;
      (this.usuario = this.perfilData.bly_nombre),
        (this.correo = this.perfilData.bly_correoElectronico),
        (this.numeroTelefono = this.perfilData.bly_numTelefono),
        (this.contrasena = this.perfilData.bly_contrasena);
      this.id = this.perfilData.bly_usuario;
    });
    this.storage.get('facturacion').then((factura) => {
      this.facturacionData = factura;
      (this.facturacion.correoElectronico = this.facturacionData.bly_correoElectronico),
        (this.facturacion.direccionFiscal = this.facturacionData.bly_direccionFiscal),
        (this.facturacion.razonSocial = this.facturacionData.bly_razonSocial),
        (this.facturacion.rfc = this.facturacionData.bly_rfc),
        (this.statusBtn = this.facturacionData.bly_statusBtn);
      if (this.statusBtn == 'true') {
        this.dato1 = true;
        this.dato2 = true;
        this.dato3 = true;
        this.dato4 = true;
        this.ocultar1 = true;
        this.ocultar2 = false;
        this.ocultar3 = false;
      } else {
        this.dato1 = false;
        this.dato2 = false;
        this.dato3 = false;
        this.dato4 = false;
        this.ocultar1 = false;
        this.dato5 = true;
        this.dato6 = true;
        this.dato7 = true;
        this.dato8 = true;
        this.ocultar2 = false;
        this.ocultar3 = true;
      }
    });
  }

  activarComponentes() {
    this.dato5 = false;
    this.dato6 = false;
    this.dato7 = false;
    this.dato8 = false;
    this.ocultar3 = false;
    this.dato1 = true;
    this.dato2 = true;
    this.dato3 = true;
    this.dato4 = true;
    this.ocultar2 = true;
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  async togglePassword() {
    const modal = await this.modalCtrl.create({
      component: Modal8Page,
    });
    return await modal.present();
  }

  async openModal4() {
    const presentModel = await this.modalCtrl.create({
      component: Modal4Page,
      componentProps: {
        title: 'Billing Address',
        type: 'billing',
      },
      showBackdrop: true,
      mode: 'ios',
      cssClass: 'change-address-shipping-modal1',
    });

    presentModel.onWillDismiss().then((data) => {
      console.log(data);
    });

    return await presentModel.present();
  }

  async openModal5() {
    const presentModel = await this.modalCtrl.create({
      component: Modal5Page,
      componentProps: {
        title: 'Billing Address',
        type: 'billing',
      },
      showBackdrop: true,
      mode: 'ios',
      cssClass: 'change-address-shipping-modal1',
    });

    presentModel.onWillDismiss().then((data) => {
      console.log(data);
      //custom code
    });

    return await presentModel.present();
  }

  registrarFacturacion() {
    this.dataService
      .registrarFacturacion(
        this.facturacion.razonSocial,
        this.facturacion.rfc,
        this.facturacion.direccionFiscal,
        this.facturacion.correoElectronico,
        this.id
      )
      .subscribe(
        (data) => {
          this.responseData = data;
        },
        (error) => {
          this.presentLoadingServer();
        }
      );
  }

  async registrarDataFacturacion() {
    if (this.facturacion.razonSocial == '') {
      const toast = await this.toastCtrl.create({
        message: 'La razón social es requerida...',
        duration: 2000,
      });
      toast.present();
    } else if (this.facturacion.rfc == '') {
      const toast = await this.toastCtrl.create({
        message: 'El RFC es requerido...',
        duration: 2000,
      });
      toast.present();
    } else if (this.facturacion.direccionFiscal == '') {
      const toast = await this.toastCtrl.create({
        message: 'La dirección fiscal es requerida...',
        duration: 2000,
      });
      toast.present();
    } else if (this.facturacion.correoElectronico == '') {
      const toast = await this.toastCtrl.create({
        message: 'El correo electrónico es requerido...',
        duration: 2000,
      });
      toast.present();
    } else {
      this.presentFacturacion();
    }
  }

  async presentAlertServer() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      buttons: [
        {
          text: 'Reintentar',
          handler: () => {
            this.modalCtrl
              .create({
                component: DetallePerfilPage,
              })
              .then((modal) => {
                modal.present();
                return modal.onDidDismiss();
              });
          },
        },
      ],
    });
    await alert.present();
  }

  async presentLoadingServer() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: 'bubbles',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }

  async presentFacturacion() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      spinner: 'bubbles',
      duration: 1500,
    });
    await loading.present();
    setTimeout(() => {
      this.registrarFacturacion();
    }, 2000);
  }

  async presentActualizarFacturacion() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      spinner: 'bubbles',
      duration: 1500,
    });
    await loading.present();
    setTimeout(() => {
      this.actualizarFacturacion();
    }, 2000);
  }

  async actualizarDataFacturacion() {
    if (this.facturacion.razonSocial == '') {
      const toast = await this.toastCtrl.create({
        message: 'La razón social es requerida...',
        duration: 2000,
      });
      toast.present();
    } else if (this.facturacion.rfc == '') {
      const toast = await this.toastCtrl.create({
        message: 'El RFC es requerido...',
        duration: 2000,
      });
      toast.present();
    } else if (this.facturacion.direccionFiscal == '') {
      const toast = await this.toastCtrl.create({
        message: 'La dirección fiscal es requerida...',
        duration: 2000,
      });
      toast.present();
    } else if (this.facturacion.correoElectronico == '') {
      const toast = await this.toastCtrl.create({
        message: 'El correo electrónico es requerido...',
        duration: 2000,
      });
      toast.present();
    } else {
      this.presentActualizarFacturacion();
    }
  }

  actualizarFacturacion() {
    let body = {
      aksi: 'actualizar',
      bly_razonSocial: this.facturacion.razonSocial,
      bly_rfc: this.facturacion.rfc,
      bly_direccionFiscal: this.facturacion.direccionFiscal,
      bly_correoElectronico: this.facturacion.correoElectronico,
      bly_usuario: this.id,
    };
    this.providerService
      .postDataAF(body, 'db_actualizarFacturacion.php')
      .subscribe(
        async (data) => {
          var alertpesan = data.msg;
          if (data.success) {
            const toast = await this.toastCtrl.create({
              message: '¡Su información ha sido actualizada correctamente!',
              duration: 2000,
            });
            toast.present();
            this.service
              .consultarDatosFacturacionAdmin(this.id)
              .subscribe((data) => {
                this.responseData = data;
              });
            this.modalCtrl.dismiss();
            this.router.navigateByUrl('/dashboard/ajustes');
          } else {
            const toast = await this.toastCtrl.create({
              message: alertpesan,
              duration: 2000,
            });
          }
        },
        (error) => {
          this.presentLoadingServer();
        }
      );
  }

  async presentAlertFacturacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar Información',
      message: '¿Está seguro que desea actualizar sus datos de facturación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.dato1 = false;
            this.dato2 = false;
            this.dato3 = false;
            this.dato4 = false;
            this.ocultar1 = false;
            this.dato5 = true;
            this.dato6 = true;
            this.dato7 = true;
            this.dato8 = true;
            this.ocultar2 = false;
            this.ocultar3 = true;
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.actualizarDataFacturacion();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentLoadingCambio() {
    const loading = await this.loading.create({
      spinner: 'bubbles',
      message: 'Espere un momento...',
      duration: 1500,
    });
    await loading.present();
    setTimeout(() => {
      this.togglePassword();
    }, 2000);
  }

  async presentCambiarContrasena() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar Contraseña',
      message: '¿Está seguro que desea actualizar su contraseña?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.presentLoadingCambio();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentActionCamera() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
