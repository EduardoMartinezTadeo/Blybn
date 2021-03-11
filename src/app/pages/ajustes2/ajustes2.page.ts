import { Component, OnInit } from '@angular/core';
import { Modal5Page } from '../../Modals/modal5/modal5.page';
import { Modal4Page } from '../../Modals/modal4/modal4.page';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OperacionesService } from '../../services/operaciones.service';
import { DataService } from '../../services/data.service';
import { ProviderService } from '../../services/provider.service';
@Component({
  selector: 'app-ajustes2',
  templateUrl: './ajustes2.page.html',
  styleUrls: ['./ajustes2.page.scss'],
})
export class Ajustes2Page implements OnInit {
  constructor(private router: Router,
     private modalCtrl: ModalController,
     private storage: Storage,
     private service: OperacionesService,
     private dataService: DataService,
     private alertController: AlertController,
     private loading: LoadingController,
     private toastCtrl: ToastController,
     private providerService: ProviderService) {}

  contentLoaded = false;
  contentLoadedF = false;
  showPassword = false;
  passwordToggleIcon = 'eye';

  ngOnInit() {}
  public ocultar1: boolean = false;
  public ocultar2: boolean = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true; 
      this.contentLoadedF = true;          
    }, 2500);    
  }


  salir() {
    this.router.navigateByUrl('/dashboard2/menutabs/inicio-menu');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
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
      //custom code
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

  usuario: string;
  correo: string;
  telefono: string;
  contrasena: string;
  rol = 'Blybn';
  tipoRol: number;
  id: string;
  perfilData: any;
  facturacionData: any;
  responseData: any;
  bly_correoElectronico: string;
  bly_direccionFiscal: string;
  bly_razonSocial: string;
  bly_rfc: string;
  bly_statusBtn: string;
  statusBtn: string;
  ionViewDidEnter(){
    this.storage.get('perfil').then((res)=>{
      this.perfilData = res;
      this.usuario = this.perfilData.bly_nombre,
      this.correo = this.perfilData.bly_correoElectronico,
      this.telefono = this.perfilData.bly_numTelefono,
      this.contrasena = this.perfilData.bly_contrasena
      this.id = this.perfilData.bly_usuario
    });
    this.storage.get('facturacion').then((factura) =>{
      this.facturacionData = factura;
      this.facturacion.correoElectronico = this.facturacionData.bly_correoElectronico,
      this.facturacion.direccionFiscal = this.facturacionData.bly_direccionFiscal,
      this.facturacion.razonSocial = this.facturacionData.bly_razonSocial,
      this.facturacion.rfc = this.facturacionData.bly_rfc,
      this.statusBtn = this.facturacionData.bly_statusBtn
      if(this.statusBtn == 'true'){
        this.ocultar1 = true;
        this.ocultar2 = false;
      } else {
        this.ocultar1 = false;
        this.ocultar2 = true;
      }
    });
  }

  facturacion = {
    razonSocial: '',
    rfc: '',
    direccionFiscal: '',
    correoElectronico: ''
  }

  registrarFacturacion(){
    this.dataService.registrarFacturacion(this.facturacion.razonSocial, this.facturacion.rfc, this.facturacion.direccionFiscal, this.facturacion.correoElectronico, this.id).subscribe(data => {
      this.responseData = data;
    }, (error) => {
      this.presentLoadingServer();
    });    
  }

  async registrarDataFacturacion(){
    if(this.facturacion.razonSocial == ""){
      const toast = await this.toastCtrl.create({
        message: 'La razón social es requerida...',
        duration: 2000
        });
        toast.present();
    } else if (this.facturacion.rfc == ""){
      const toast = await this.toastCtrl.create({
        message: 'El RFC es requerido...',
        duration: 2000
        });
        toast.present();
    } else if (this.facturacion.direccionFiscal == ""){
      const toast = await this.toastCtrl.create({
        message: 'La dirección fiscal es requerida...',
        duration: 2000
        });
        toast.present();
    } else if (this.facturacion.correoElectronico == ""){
      const toast = await this.toastCtrl.create({
        message: 'El correo electrónico es requerido...',
        duration: 2000
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
      buttons: [{
        text: 'Reintentar',
        handler: () => {
         this.router.navigateByUrl('/ajustes2');
        }
      }]
    });
    await alert.present();
  }

  async presentLoadingServer() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: "bubbles"
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
      duration: 1500
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
      duration: 1500
    });
    await loading.present();
    setTimeout(() => {
      this.actualizarFacturacion();
     
    }, 2000);
  }

  async actualizarDataFacturacion(){
    if(this.facturacion.razonSocial == ""){
      const toast = await this.toastCtrl.create({
        message: 'La razón social es requerida...',
        duration: 2000
        });
        toast.present();
    } else if (this.facturacion.rfc == ""){
      const toast = await this.toastCtrl.create({
        message: 'El RFC es requerido...',
        duration: 2000
        });
        toast.present();
    } else if (this.facturacion.direccionFiscal == ""){
      const toast = await this.toastCtrl.create({
        message: 'La dirección fiscal es requerida...',
        duration: 2000
        });
        toast.present();
    } else if (this.facturacion.correoElectronico == ""){
      const toast = await this.toastCtrl.create({
        message: 'El correo electrónico es requerido...',
        duration: 2000
        });
        toast.present();
    } else {
      this.presentActualizarFacturacion();
    } 
  }

  actualizarFacturacion(){
    let body = {
      aksi: 'actualizar',
      bly_razonSocial: this.facturacion.razonSocial,
      bly_rfc: this.facturacion.rfc,
      bly_direccionFiscal: this.facturacion.direccionFiscal,
      bly_correoElectronico: this.facturacion.correoElectronico,
      bly_usuario: this.id
    }
    this.providerService.postDataAF(body, 'db_actualizarFacturacion.php').subscribe(async data=> {
      var alertpesan = data.msg;
      if (data.success) {
        const toast = await this.toastCtrl.create({
          message: '¡Su información ha sido actualizada correctamente!',
          duration: 2000
        });
        toast.present();
        this.service.consultarDatosFacturacion(this.id).subscribe(data => {
          this.responseData = data;
        });
        this.router.navigateByUrl('/dashboard2/menutabs/inicio-menu');
      } else {
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 2000
        });
      }
    }, (error) => {
      this.presentLoadingServer();
    });
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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.actualizarDataFacturacion();
          }
        }
      ]
    });

    await alert.present();
  }
}
