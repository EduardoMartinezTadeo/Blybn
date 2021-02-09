import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data = [
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      selected: false
    }
  ];


  registro = {
    nombreUsuario: '',
    correoElectronico: '',
    numTelefono: '',
    dia: [''],
    mes: [''],
    years: '',
    sexo: '',
    contrasena: '',
    contrasenaconfirm: '',
    termino: false
  }

  responseData: any;

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Se ha registrado exitosamente!',
      duration: 2000,
      cssClass: 'toast-scheme'
    });
    toast.present();
  }


  onRegister() {
    this.presentToast();
    this.servicio.registrarUsuario(this.registro.nombreUsuario, this.registro.correoElectronico, this.registro.numTelefono, this.registro.dia, this.registro.mes, this.registro.years, this.registro.sexo, this.registro.contrasena).subscribe(data => {
      this.responseData = data;
      console.log(data);
    });
  }

  cerrar() {
    this.navCtrl.back();
  }


  constructor(
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private servicio: DataService,
    private pickerCtrl: PickerController) { }

  ngOnInit() {
  }



  async showPickerDia() {
    let opts: PickerOptions = {
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
            { text: 'Enero',   value: '01' },
            { text: 'Febrero', value: '02' },
            { text: 'Marzo',   value: '03' },
            { text: 'Abril',   value: '04' },
            { text: 'Mayo',    value: '05' },
            { text: 'Junio',   value: '06' },
            { text: 'Julio',   value: '07' },
            { text: 'Agosto',     value: '08' },
            { text: 'Septiembre', value: '09' },
            { text: 'Octubre',    value: '10' },
            { text: 'Noviembre',  value: '11' },
            { text: 'Diciembre',  value: '12' },
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

}
