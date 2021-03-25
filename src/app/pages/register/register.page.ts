import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController, LoadingController, ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Modal10Page } from '../../Modals/modal10/modal10.page';
import { Modal9Page } from '../../Modals/modal9/modal9.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private servicio: DataService,
    private pickerCtrl: PickerController,
    private alertController: AlertController,
    private loading: LoadingController,
    private modalCtrl: ModalController) { }

  data = [
    {
      name: 'Acepto los términos y condiciones del uso de este servicio.',
      selected: true
    }
  ];

  registro = {
    nombreUsuario: '',
    correoElectronico: '',
    numTelefono: '',
    dia: [''],
    mes: [''],
    sexo: '',
    contrasena: '',
    contrasenaconfirm: '',
    termino: true
   }
  year;
  responseData: any;

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      cssClass: 'toast-scheme'
    });
    toast.present();
  }

  fechaCorta = new Date().getFullYear();
  edad;
  onRegister() {
    var n1 = (this.fechaCorta);
    var n2 = (this.year);  
    this.edad = (n1 - n2);
    if( this.edad > 80) {
      this.presentToast("Ingrese una edad valida...");
    } else if( this.edad < 18){
      this.presentToast("Se requiere ser mayor de edad...");
    } else {
      if(this.registro.contrasena != this.registro.contrasenaconfirm){
        this.presentToast("Las contraseñas no coinciden...");
      } else {
        this.servicio.registrarUsuario(this.registro.nombreUsuario, this.registro.correoElectronico, this.registro.numTelefono, this.registro.dia, this.registro.mes, this.year, this.registro.sexo, this.registro.contrasena, this.registro.termino).subscribe(data => {
          this.responseData = data;
          console.log(this.responseData);
        }, (error) => {
          this.presentLoadingServer();
        });
      }
    }  
  }

  async presentAlertServer() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      mode: 'ios',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.router.navigateByUrl('/register');
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
      spinner: "bubbles",
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }

  cerrar() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

  async showPickerDia() {
    let opts: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Hecho'
        }
      ],
      columns: [
        {
          name: 'Día',
          options: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' },
            { text: '11', value: '11' },
            { text: '12', value: '12' },
            { text: '13', value: '13' },
            { text: '14', value: '14' },
            { text: '15', value: '15' },
            { text: '16', value: '16' },
            { text: '17', value: '17' },
            { text: '18', value: '18' },
            { text: '19', value: '19' },
            { text: '20', value: '20' },
            { text: '21', value: '21' },
            { text: '22', value: '22' },
            { text: '23', value: '23' },
            { text: '24', value: '24' },
            { text: '25', value: '25' },
            { text: '26', value: '26' },
            { text: '27', value: '27' },
            { text: '28', value: '28' },
            { text: '29', value: '29' },
            { text: '30', value: '30' },
            { text: '31', value: '31' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let dia = await picker.getColumn('Día');
      this.registro.dia = [
        dia.options[dia.selectedIndex].value
      ]
    });
  }

  async showPickerMes() {
    let opts: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Hecho'
        }
      ],
      columns: [
        {
          name: 'Mes',
          options: [
            { text: 'Enero', value: '01' },
            { text: 'Febrero', value: '02' },
            { text: 'Marzo', value: '03' },
            { text: 'Abril', value: '04' },
            { text: 'Mayo', value: '05' },
            { text: 'Junio', value: '06' },
            { text: 'Julio', value: '07' },
            { text: 'Agosto', value: '08' },
            { text: 'Septiembre', value: '09' },
            { text: 'Octubre', value: '10' },
            { text: 'Noviembre', value: '11' },
            { text: 'Diciembre', value: '12' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let mes = await picker.getColumn('Mes');
      this.registro.mes = [
        mes.options[mes.selectedIndex].value
      ]
    });
  }


  showPassword = false;
  passwordToggleIcon = 'eye';

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  showPasswordcf = false;
  passwordToggleIconcf = 'eye';

  togglePasswordcf(): void {
    this.showPasswordcf = !this.showPasswordcf;
    if (this.passwordToggleIconcf == 'eye') {
      this.passwordToggleIconcf = 'eye-off';
    } else {
      this.passwordToggleIconcf = 'eye';
    }
  }

  async openModal9() {
    const presentModel = await this.modalCtrl.create({
      component: Modal9Page,
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
    });
    
    return await presentModel.present();
  }

  async openModal10() {
    const presentModel = await this.modalCtrl.create({
      component: Modal10Page,
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
    });
    
    return await presentModel.present();
  }
}
