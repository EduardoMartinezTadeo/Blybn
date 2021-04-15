import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController, ToastController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro-p2r11',
  templateUrl: './registro-p2r11.page.html',
  styleUrls: ['./registro-p2r11.page.scss'],
})
export class RegistroP2r11Page implements OnInit {
  constructor(
    private router: Router,
    private pickerCtrl: PickerController,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  toast: any;
  ngOnInit() {}

  contentLoaded = false;
  ionViewWillLeave(){
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  
  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }

  cancelar() {
    this.router.navigate(['/registro-p11']);
  }

  

  cantidadBanos = '';

  async showBasicPicker() {
    let opts: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar'
        }
      ],
      columns: [
        {
          name: 'Baños',
          options: [
            { text: '0 baños', value: '0' },
            { text: '0.5 baños', value: '0.5' },
            { text: '1 baño', value: '1' },
            { text: '1.5 baños', value: '1.5' },
            { text: '2 baños', value: '2' },
            { text: '2.5 baños', value: '2.5' },
            { text: '3 baños', value: '3' },
            { text: '3.5 baños', value: '3.5' },
            { text: '4 baños', value: '4' },
            { text: '4.5 baños', value: '4.5' },
            { text: '5 baños', value: '5' },
            { text: '5.5 baños', value: '5.5' },
            { text: '6 baños', value: '6' },
            { text: '6.5 baños', value: '6.5' },
            { text: '7 baños', value: '7' },
            { text: '7.5 baños', value: '7.5' },
            { text: '8 baños más', value: '8' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('Baños');
      this.cantidadBanos = col.options[col.selectedIndex].text;
      let body = {
        ngModel: this.cantidadBanos
      }
      let final = body;
    });
  }

  data = [
    {
      name: 'Baño privado',
      selected: false
    },
    {
      name: 'Baño compartido',
      selected: false
    }
  ];

  tipobano: any;
  nombretipoBano: string;
  onClick( item: any ) {
    this.tipobano = item;
    this.nombretipoBano = this.tipobano.name;
  }

  informacionR11: any;

  guardarInformacion(){
    if(this.cantidadBanos.length == 0){
      this.toast = this.toastController.create({
        message: 'Debe contestar la información requerida...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if (this.tipobano == undefined || null){
      this.toast = this.toastController.create({
        message: 'Debe contestar la información requerida...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.informacionR11 = {
        cantidadBano: this.cantidadBanos,
        tipoBano: this.nombretipoBano,
        registro11: true
      }
      this.storage.set('registroP11', this.informacionR11).then((res) => {
        this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
      });
    }
  }

}
