import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  AlertController,
  LoadingController,
  ToastController,
  ActionSheetController,
} from '@ionic/angular';
import { Modal4Page } from '../../Modals/modal4/modal4.page';
import { Modal5Page } from '../../Modals/modal5/modal5.page';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';
import { Modal7Page } from '../../Modals/modal7/modal7.page';
import { ProviderService } from '../../services/provider.service';
import { OperacionesService } from '../../services/operaciones.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-detalle-perfil2',
  templateUrl: './detalle-perfil2.page.html',
  styleUrls: ['./detalle-perfil2.page.scss'],
})
export class DetallePerfil2Page implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private dataService: DataService,
    private alertController: AlertController,
    private loading: LoadingController,
    private toastCtrl: ToastController,
    private providerService: ProviderService,
    private service: OperacionesService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private provider: ProviderService,
    private camera: Camera
  ) {
    this.server = this.provider.server;
  }

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
  server: string;
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
        this.cargarFotoPerfil();  
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
      component: Modal7Page,
      mode: 'ios',
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
        message: 'La raz??n social es requerida...',
        duration: 2000,
        mode: 'ios',
      });
      toast.present();
    } else if (this.facturacion.rfc == '') {
      const toast = await this.toastCtrl.create({
        message: 'El RFC es requerido...',
        duration: 2000,
        mode: 'ios',
      });
      toast.present();
    } else if (this.facturacion.direccionFiscal == '') {
      const toast = await this.toastCtrl.create({
        message: 'La direcci??n fiscal es requerida...',
        duration: 2000,
        mode: 'ios',
      });
      toast.present();
    } else if (this.facturacion.correoElectronico == '') {
      const toast = await this.toastCtrl.create({
        message: 'El correo electr??nico es requerido...',
        duration: 2000,
        mode: 'ios',
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
      mode: 'ios',
      message: 'Ha ocurrido un error, verifique su conexi??n!!!',
      buttons: [
        {
          text: 'Reintentar',
          handler: () => {
            this.modalCtrl
              .create({
                component: DetallePerfil2Page,
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
      mode: 'ios',
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
      mode: 'ios',
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
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.actualizarFacturacion();
    }, 2000);
  }

  async actualizarDataFacturacion() {
    if (this.facturacion.razonSocial == '') {
      const toast = await this.toastCtrl.create({
        message: 'La raz??n social es requerida...',
        duration: 2000,
        mode: 'ios',
      });
      toast.present();
    } else if (this.facturacion.rfc == '') {
      const toast = await this.toastCtrl.create({
        message: 'El RFC es requerido...',
        duration: 2000,
        mode: 'ios',
      });
      toast.present();
    } else if (this.facturacion.direccionFiscal == '') {
      const toast = await this.toastCtrl.create({
        message: 'La direcci??n fiscal es requerida...',
        duration: 2000,
        mode: 'ios',
      });
      toast.present();
    } else if (this.facturacion.correoElectronico == '') {
      const toast = await this.toastCtrl.create({
        message: 'El correo electr??nico es requerido...',
        duration: 2000,
        mode: 'ios',
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
              message: '??Su informaci??n ha sido actualizada correctamente!',
              duration: 2000,
              mode: 'ios',
            });
            toast.present();
            this.service
              .consultarDatosFacturacion(this.id)
              .subscribe((data) => {
                this.responseData = data;
              });
            this.modalCtrl.dismiss();
            this.router.navigateByUrl('/dashboard2/ajustes2');
          } else {
            const toast = await this.toastCtrl.create({
              message: alertpesan,
              duration: 2000,
              mode: 'ios',
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
      header: 'Actualizar Informaci??n',
      mode: 'ios',
      message: '??Est?? seguro que desea actualizar sus datos de facturaci??n?',
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
      mode: 'ios',
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
      header: 'Actualizar Contrase??a',
      mode: 'ios',
      message: '??Est?? seguro que desea actualizar su contrase??a?',
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
            this.presentLoadingCambio();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentActionCamera() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones C??mara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotograf??a',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera();
          },
        },
        {
          text: 'Seleccionar Fotograf??a',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery();
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

  foto: string;
  cameraData: string;
  base64Image: string;
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 512,
      targetHeight: 512,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData = imageData;
        this.foto = 'data:image/jpeg;base64,' + imageData;
        this.actualizarFoto();
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 512,
      targetHeight: 512,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData = imageData;
        this.foto = 'data:image/jpeg;base64,' + imageData;
        this.actualizarFoto();
      },
      (err) => {
        // Handle error
      }
    );
  }

  fotoPerfil: any = [];
  actualizarFoto() {
    let body = {
      aksi: 'actualizarImage',
      bly_usuario: this.id,
      bly_foto: this.cameraData,
    };
    this.providerService
      .postDataAFP(body, 'db_controlFotoPerfil.php')
      .subscribe((data) => {
        console.log(data.result);
        this.cargarFotoPerfil();
      });
  }

  cargarFotoPerfil() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'perfilFoto',
        bly_usuario: this.id,
      };
      this.provider
        .postDataCFPA(body, 'db_cargarFotoPerfilAct.php')
        .subscribe((data) => {
          this.fotoPerfil = data;
          this.foto = this.fotoPerfil.bly_fotografia;
          resolve(true);
        });
    });
  }

  onError(img) {
    img.src = '../../../../assets/imgs/avatar.svg';
  }
}
