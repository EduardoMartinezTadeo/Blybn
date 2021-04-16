import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro-p5',
  templateUrl: './registro-p5.page.html',
  styleUrls: ['./registro-p5.page.scss'],
})
export class RegistroP5Page implements OnInit {

  currentPosition;
  height;
  minimumThreshold;
  startPosition;

  ngOnInit() {
    this.close();
  }

  contentLoaded = false;
  ionViewWillLeave(){
    this.close();
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }
  
  toast: any;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private toastController: ToastController
  ) { }


  titulo: string;

  informacionR5C: any;
  informacionR5: any;
  guardarInformacion(){
    if(this.titulo == null || this.titulo == "" || this.titulo == undefined){
      this.toast = this.toastController.create({
        message: 'Debe escribir un título para su propiedad...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.informacionR5 = {
        tituloPropiedad: this.titulo,
        registro5: true
      }
      this.storage.set('registroP5', this.informacionR5).then((res) => {
        this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
      });
    }
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
            this.informacionR5C = {
              registro5: false
            }
            this.storage.set('registroP5', this.informacionR5C).then((res) => {
              console.log(res);
            });
            this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
          },
        },
      ],
    });
    await alert.present();
  }

 
  open(){
    (<HTMLStyleElement>document.querySelector(".bottomSheetp5")).style.bottom = "0px";
    (<HTMLStyleElement>document.querySelector(".bgp5")).style.display = "block";
  }

  close(){
    this.currentPosition = 0;
    this.startPosition = 0;
    (<HTMLStyleElement>document.querySelector(".bottomSheetp5")).style.bottom = "-1000px";
    (<HTMLStyleElement>document.querySelector(".bottomSheetp5")).style.transform = "translate3d(0px,0px,0px)";
    (<HTMLStyleElement>document.querySelector(".bgp5")).style.display = "none";
  }

  touchMove(evt: TouchEvent){
    if (this.startPosition == 0){
      this.startPosition = evt.touches[0].clientY;
    }

    this.height = document.querySelector(".bottomSheetp5").clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPosition = y - this.startPosition;

    if (this.currentPosition > 0 && this.startPosition > 0) {
      (<HTMLStyleElement>document.querySelector(".bottomSheetp5")).style.transform = "translate3d(0px," + this.currentPosition + "px,0px)";
    }
  }

  touchEnd(){
    this.minimumThreshold = this.height - 150;

    if (this.currentPosition < this.minimumThreshold){
      (<HTMLStyleElement>document.querySelector(".bottomSheetp5")).style.transform = "translate3d(0px,0px,0px)";
    }
    else {
      this.close();
    }
  }
}
