import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registro-p6',
  templateUrl: './registro-p6.page.html',
  styleUrls: ['./registro-p6.page.scss'],
})
export class RegistroP6Page implements OnInit {

  toast: any;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService,
    private storage: Storage,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.requisitosRenta = [];
  }

  contentLoaded = false;
  ionViewWillLeave(){
    this.cargarRequisitos();
    this.requisitosRenta = [];
    this.requisitos = [];
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    this.requisitos = [];
    this.requisitosRenta = [];
    this.cargarRequisitos();
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }

  async cancelar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      message: '¿Esta seguro que desea cancelar el registro de la propiedad?',
      mode: 'ios',
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
            this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
            this.requisitos = [];
          },
        },
      ],
    });

    await alert.present();
  }

  requisitosRenta = [];
  onClick(requisito: any) {
    this.requisitosRenta.push(requisito);
  }

  informacionRequisitos: any;
  guardarInformacion(){
    if(this.requisitosRenta.length == 0){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar un requisito...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.informacionRequisitos = {
        requisitos: this.requisitosRenta
      }
      this.storage.set('requisitosRenta', this.informacionRequisitos).then((res) => {
        this.router.navigate(['/registrop6r11']);
        this.requisitos = [];
      });
    }   
  }

  requisitos: any = [];
  cargarRequisitos(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'requisitos'
      };
      this.provider.postDataRRP(body, 'db_cargarRequisitos.php').subscribe((data) => {
        for (let requisito of data.result){
          this.requisitos.push(requisito);
        }
        resolve(true);
      });
    });
  }


}
