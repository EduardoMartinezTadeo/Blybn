import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Modal4Page } from '../../Modals/modal4/modal4.page';
import { Modal5Page } from '../../Modals/modal5/modal5.page';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';
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
    private toastCtrl: ToastController) { }

  showPassword = false;
  passwordToggleIcon = 'eye';

  ngOnInit() {
    
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  togglePassword(){
  }

  async openModal4() {
    const presentModel = await this.modalCtrl.create({
      component: Modal4Page,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal1'
    });

    presentModel.onWillDismiss().then((data)=>{
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
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal1'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(data);
      //custom code
    });
    
    return await presentModel.present();
  }

  usuario: string;
  correo: string;
  numeroTelefono: string;
  contrasena: string;
  id: string
  perfilData: any;
  facturacionData: any;
  ionViewWillEnter(){
    this.storage.get('perfil').then((res)=>{
      this.perfilData = res;
      this.usuario = this.perfilData.bly_nombre,
      this.correo = this.perfilData.bly_correoElectronico,
      this.numeroTelefono = this.perfilData.bly_numTelefono,
      this.contrasena = this.perfilData.bly_contrasena
      this.id = this.perfilData.bly_usuario
    });
    this.storage.get('facturacion').then((factura) =>{
      this.facturacionData = factura;
      this.facturacion.correoElectronico = this.facturacionData.bly_correoElectronico,
      this.facturacion.direccionFiscal = this.facturacionData.bly_direccionFiscal,
      this.facturacion.razonSocial = this.facturacionData.bly_razonSocial,
      this.facturacion.rfc = this.facturacionData.bly_rfc
    });   
  }

  facturacion = {
    razonSocial: '',
    rfc: '',
    direccionFiscal: '',
    correoElectronico: ''
  }
  responseData: any;
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
          this.modalCtrl.create({
            component: DetallePerfil2Page
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
          });
        }
      }
      ]
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
}
