import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registrar-propiedad',
  templateUrl: './registrar-propiedad.page.html',
  styleUrls: ['./registrar-propiedad.page.scss'],
})
export class RegistrarPropiedadPage implements OnInit {
  currentPosition;
  height;
  minimumThreshold;
  startPosition;
  informacionR1: any;
  informacionR2: any;
  informacionR3: any;
  informacionR4: any;
  informacionR5: any;
  informacionR6: any;
  informacionR7: any;
  informacionR8: any;
  informacionR9: any;
  informacionR10: any;
  informacionR11: any;
  informacionEspecial: any;
  toast: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.informacionR1 = {
      registro1: false,
    };
    this.informacionR2 = {
      registro2: false,
    };
    this.informacionR3 = {
      registro3: false,
    };
    this.informacionR4 = {
      registro4: false,
    };
    this.informacionR5 = {
      registro5: false,
    };
    this.informacionR6 = {
      registro6: false,
    };
    this.informacionR7 = {
      registro7: false,
    };
    this.informacionR8 = {
      registro8: false,
    };
    this.informacionR9 = {
      registro9: false,
    };
    this.informacionR10 = {
      registro10: false,
    };
    this.informacionR11 = {
      registro11: false,
    };
    this.informacionEspecial = {
      finalActivar: false,
    };
  }

  id_usuario: string;
  dataPerfil: any;

  public dato1: boolean = true;
  public dato2: boolean = false;

  public dato3: boolean = true;
  public dato4: boolean = false;

  public dato5: boolean = true;
  public dato6: boolean = false;

  public dato7: boolean = true;
  public dato8: boolean = false;

  public dato9: boolean = true;
  public dato10: boolean = false;

  public dato11: boolean = true;
  public dato12: boolean = false;

  public dato13: boolean = true;
  public dato14: boolean = false;

  public dato15: boolean = true;
  public dato16: boolean = false;

  public dato17: boolean = true;
  public btnEspecial: boolean = false;

  public dato19: boolean = true;
  public dato20: boolean = false;

  public dato21: boolean = true;
  public dato22: boolean = false;

  public dato23: boolean = false;

  public dator1: boolean = false;
  public dator2: boolean = false;
  public dator3: boolean = false;
  public dator4: boolean = false;
  public dator5: boolean = false;
  public dator6: boolean = false;
  public dator7: boolean = false;
  public dator8: boolean = false;
  public dator10: boolean = false;
  public dator11: boolean = false;

  parteR1: any;

  ngOnInit() {
    this.closes();
  }

  salir() {
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

  open(){
    (<HTMLStyleElement>document.querySelector(".bottomSheetsad")).style.bottom = "0px";
    (<HTMLStyleElement>document.querySelector(".bgad")).style.display = "block";
  }

  closes(){
    this.currentPosition = 0;
    this.startPosition = 0;
    (<HTMLStyleElement>document.querySelector(".bottomSheetsad")).style.bottom = "-1000px";
    (<HTMLStyleElement>document.querySelector(".bottomSheetsad")).style.transform = "translate3d(0px,0px,0px)";
    (<HTMLStyleElement>document.querySelector(".bgad")).style.display = "none";
  }

  touchMove(evt: TouchEvent){
    if (this.startPosition == 0){
      this.startPosition = evt.touches[0].clientY;
    }

    this.height = document.querySelector(".bottomSheetsad").clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPosition = y - this.startPosition;

    if (this.currentPosition > 0 && this.startPosition > 0) {
      (<HTMLStyleElement>document.querySelector(".bottomSheetsad")).style.transform = "translate3d(0px," + this.currentPosition + "px,0px)";
    }
  }

  touchEnd(){
    this.minimumThreshold = this.height - 150;

    if (this.currentPosition < this.minimumThreshold){
      (<HTMLStyleElement>document.querySelector(".bottomSheetsad")).style.transform = "translate3d(0px,0px,0px)";
    }
    else {
      this.closes();
    }
  }

  resultadoR1;
  boton1: boolean;

  registrop1() {
    this.storage.get('registroP1').then((res) => {
      this.resultadoR1 = res;
      this.boton1 = this.resultadoR1.registro1;
    });
    if (this.boton1 == false) {
      this.router.navigate(['/animacionb01']);
      this.dato1 = false;
      this.dator1 = true;
    } else if (this.boton1 == true) {
      this.dato1 = false;
      this.dator1 = true;
    }
  }

  async reiniciarR1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Confirmaci??n',
      message: '??Est?? seguro de reiniciar este apartado?',
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
            this.router.navigate(['/animacionb01']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR10;
  boton10: boolean;
  registrop10() {
    this.storage.get('registroP10').then((res) => {
      this.resultadoR10 = res;
      this.boton10 = this.resultadoR10.registro10;
    });
    if (this.boton10 == false) {
      this.router.navigate(['/animacionb10']);
      this.dato19 = false;
      this.dator10 = true;
    } else if (this.boton10 == true) {
      this.dato19 = false;
      this.dator10 = true;
    }
  }

  async reiniciarR2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Confirmaci??n',
      message: '??Est?? seguro de reiniciar este apartado?',
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
            this.router.navigate(['/animacionb10']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR11;
  boton11: boolean;
  registrop11() {
    this.storage.get('registroP11').then((res) => {
      this.resultadoR11 = res;
      this.boton11 = this.resultadoR11.registro11;
    });
    if (this.boton11 == false) {
      this.router.navigate(['/animacionb11']);
      this.dato21 = false;
      this.dator11 = true;
    } else if (this.boton11 == true) {
      this.dato21 = false;
      this.dator11 = true;
    }
  }

  async reiniciarR3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Confirmaci??n',
      message: '??Est?? seguro de reiniciar este apartado?',
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
            this.router.navigate(['/animacionb11']);
          },
        },
      ],
    });

    await alert.present();
  }
  async alertEspera() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Aviso',
      subHeader: 'Registro en proceso...',
      message:
        'Para editar la informaci??n o registrar una propiedad nueva, termine el registro actual que se encuentra en proceso.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  async confirmaReinicio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Confirmaci??n',
      subHeader: 'Esta seguro de reiniciar los apartados del registro',
      message: 'Toda la informaci??n se borrar?? definitivamente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Continuar con el reinicio',
          handler: () => {
            this.cargaReinicio();
          }
        }
      ]
    });

    await alert.present();
  }
  async cargaReinicio() {
    const loading = await this.loadingController.create({
      mode: 'ios',
      message: 'Espere un momento...',
      duration: 2000,
    });
    await loading.present();
    setTimeout(() => {
      this.reiniciar();
    }, 1500);
  }

  reiniciar() {
    this.storage.set('registroP1', this.informacionR1).then((res) => {
    });
    this.storage.set('registroP2', this.informacionR2).then((res) => {
    });
    this.storage.set('registroP3', this.informacionR3).then((res) => {
    });
    this.storage.set('registroP4', this.informacionR4).then((res) => {
    });
    this.storage.set('registroP5', this.informacionR5).then((res) => {
    });
    this.storage.set('registroP6', this.informacionR6).then((res) => {
    });
    this.storage.set('registroP7', this.informacionR7).then((res) => {
    });
    this.storage.set('registroP8', this.informacionR8).then((res) => {
    });
    this.storage.set('registroP9', this.informacionR9).then((res) => {
    });
    this.storage.set('registroP10', this.informacionR10).then((res) => {
    });
    this.storage.set('registroP11', this.informacionR11).then((res) => {
    });
    this.storage.set('botonEspecial', this.informacionEspecial).then((res) => {
      this.btnEspecial = false;
    });
    this.storage.remove('costosPropiedad');
    this.storage.remove('mapaInformacion');
    this.storage.remove('mueblesInformacion');
    this.storage.remove('requisitosDisponibilidad');
    this.storage.remove('requisitosRenta');
    
    this.dato1 = true;
    this.dator1 = false;
    this.dato2 = false;

    this.dato3 = true;
    this.dato4 = false;
    this.dator2 = false;

    this.dato5 = true;
    this.dato6 = false;
    this.dator3 = false;

    this.dato7 = true;
    this.dato8 = false;
    this.dator4 = false;

    this.dato9 = true;
    this.dato10 = false;
    this.dator5 = false;

    this.dato11 = true;
    this.dato12 = false;
    this.dator6 = false;

    this.dato13 = true;
    this.dato14 = false;
    this.dator7 = false;

    this.dato15 = true;
    this.dato16 = false;
    this.dator8 = false;

    this.dato17 = true;
    
    this.dato19 = true;
    this.dato20 = false;
    this.dator10 = false;

    this.dato21 = true;
    this.dato22 = false;
    this.dator11 = false;
  }

  resultadoR2;
  boton2: boolean;
  registrop2() {
    this.storage.get('registroP2').then((res) => {
      this.resultadoR2 = res;
      this.boton2 = this.resultadoR2.registro2;
    });
    if (this.boton2 == false) {
      this.router.navigate(['/animacionb02']);
      this.dato3 = false;
      this.dator2 = true;
    } else if (this.boton2 == true) {
      this.dato3 = false;
      this.dator2 = true;
    }
  }

  async reiniciarR4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb02']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR3;
  boton3: boolean;
  registrop3() {
    this.storage.get('registroP3').then((res) => {
      this.resultadoR3 = res;
      this.boton3 = this.resultadoR3.registro3;
    });
    if (this.boton3 == false) {
      this.router.navigate(['/animacionb03']);
      this.dato5 = false;
      this.dator3 = true;
    } else if (this.boton3 == true) {
      this.dato5 = false;
      this.dator3 = true;
    }
  }

  async reiniciarR5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb03']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR4;
  boton4: boolean;
  registrop4() {
    this.storage.get('registroP4').then((res) => {
      this.resultadoR4 = res;
      this.boton4 = this.resultadoR4.registro4;
    });
    if (this.boton4 == false) {
      this.router.navigate(['/animacionb04']);
      this.dato7 = false;
      this.dator4 = true;
    } else if (this.boton4 == true) {
      this.dato7 = false;
      this.dator4 = true;
    }
  }

  async reiniciarR6() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb04']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR5;
  boton5: boolean;
  registrop5() {
    this.storage.get('registroP5').then((res) => {
      this.resultadoR5 = res;
      this.boton5 = this.resultadoR5.registro5;
    });
    if (this.boton5 == false) {
      this.router.navigate(['/animacionb05']);
      this.dato9 = false;
      this.dator5 = true;
    } else if (this.boton5 == true) {
      this.dato9 = false;
      this.dator5 = true;
    }
  }

  async reiniciarR7() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb05']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR6;
  boton6: boolean;
  registrop6() {
    this.storage.get('registroP6').then((res) => {
      this.resultadoR6 = res;
      this.boton6 = this.resultadoR6.registro6;
    });
    if (this.boton6 == false) {
      this.router.navigate(['/animacionb06']);
      this.dato11 = false;
      this.dator6 = true;
    } else if (this.boton6 == true) {
      this.dato11 = false;
      this.dator6 = true;
    }
  }

  async reiniciarR8() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb06']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR7;
  boton7: boolean;
  registrop7() {
    this.storage.get('registroP7').then((res) => {
      this.resultadoR7 = res;
      this.boton7 = this.resultadoR7.registro7;
    });
    if (this.boton7 == false) {
      this.router.navigate(['/animacionb07']);
      this.dato13 = false;
      this.dator7 = true;
    } else if (this.boton7 == true) {
      this.dato13 = false;
      this.dator7 = true;
    }
  }

  async reiniciarR9() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb07']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoR8;
  boton8: boolean;
  registrop8() {
    this.storage.get('registroP8').then((res) => {
      this.resultadoR8 = res;
      this.boton8 = this.resultadoR8.registro8;
    });
    if (this.boton8 == false) {
      this.router.navigate(['/animacionb08']);
      this.dato15 = false;
      this.dator8 = true;
      this.dato17 = true;
    } else if (this.boton8 == true) {
      this.dato15 = false;
      this.dator8 = true;
      this.dato17 = true;
    }
  }

  async reiniciarR10() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Est?? seguro de reiniciar este apartado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/animacionb08']);
          },
        },
      ],
    });

    await alert.present();
  }

  resultadoVR1;
  resultadoVR2;
  resultadoVR3;
  resultadoVR4;
  resultadoVR5;
  resultadoVR6;
  resultadoVR7;
  resultadoVR8;
  resultadoVR9;
  resultadoVR10;
  resultadoVR11;
  resultadoVR12;
  valor1: boolean;
  valor2: boolean;
  valor3: boolean;
  valor4: boolean;
  valor5: boolean;
  valor6: boolean;
  valor7: boolean;
  valor8: boolean;
  valor9: boolean;
  valor10: boolean;
  valor11: boolean;
  valor12: boolean;

  registrop9() {
    this.storage.get('registroP1').then((res) => {
      this.resultadoVR1 = res;
      this.valor1 = this.resultadoVR1.registro1;
    });
    this.storage.get('registroP2').then((res) => {
      this.resultadoVR2 = res;
      this.valor2 = this.resultadoVR2.registro2;
    });
    this.storage.get('registroP3').then((res) => {
      this.resultadoVR3 = res;
      this.valor3 = this.resultadoVR3.registro3;
    });
    this.storage.get('registroP4').then((res) => {
      this.resultadoVR4 = res;
      this.valor4 = this.resultadoVR4.registro4;
    });
    this.storage.get('registroP5').then((res) => {
      this.resultadoVR5 = res;
      this.valor5 = this.resultadoVR5.registro5;
    });
    this.storage.get('registroP6').then((res) => {
      this.resultadoVR6 = res;
      this.valor6 = this.resultadoVR6.registro6;
    });
    this.storage.get('registroP7').then((res) => {
      this.resultadoVR7 = res;
      this.valor7 = this.resultadoVR7.registro7;
    });
    this.storage.get('registroP8').then((res) => {
      this.resultadoVR8 = res;
      this.valor8 = this.resultadoVR8.registro8;
    });
    this.storage.get('botonEspecial').then((res) => {
      this.resultadoVR9 = res;
      this.valor9 = this.resultadoVR9.finalActivar;
    });
    this.storage.get('registroP10').then((res) => {
      this.resultadoVR10 = res;
      this.valor10 = this.resultadoVR10.registro10;
    });
    this.storage.get('registroP11').then((res) => {
      this.resultadoVR11 = res;
      this.valor11 = this.resultadoVR11.registro11;
    });
    if (this.valor1 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado propiedad y alojamiento...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor2 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de ubicaci??n...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor3 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de servicios...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor4 == false){
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de fotograf??as...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor5 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de titulo...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor6 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado reservaciones...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor7 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de disponibilidad...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor8 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de precios...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor10 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de huespedes...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor11 == false) {
      this.toast = this.toastController
        .create({
          message: 'Debe completar el apartado de interiores...',
          duration: 2000,
          mode: 'ios',
        })
        .then((toastData) => {
          toastData.present();
        });
    } else if (this.valor9 == true){
      this.dator1 = false;
      this.dator2 = false;
      this.dator3 = false;
      this.dator4 = false;
      this.dator5 = false;
      this.dator6 = false;
      this.dator7 = false;
      this.dator8 = false;
      this.dator10 = false;
      this.dator11 = false;
      this.dato1 = false;
      this.dato2 = true;

      this.dato3 = false;
      this.dato4 = true;

      this.dato5 = false;
      this.dato6 = true;

      this.dato7 = false;
      this.dato8 = true;

      this.dato9 = false;
      this.dato10 = true;

      this.dato11 = false;
      this.dato12 = true;

      this.dato13 = false;
      this.dato14 = true;

      this.dato15 = false;
      this.dato16 = true;

      this.dato17 = false;

      this.dato19 = false;
      this.dato20 = true;

      this.dato21 = false;
      this.dato22 = true;

      this.dato23 = true;
      this.confirmacionContrato();
    }
  }
  
  async confirmacionContrato() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmaci??n',
      mode: 'ios',
      message: '??Antes de continuar aseg??rese que tiene el tiempo necesario para terminar el proceso de publicaci??n ya que si deja inconclusa la verificaci??n de informaci??n todos los apartados ser??n reiniciados y su avance de publicaci??n ser?? eliminado!',
      buttons: [
        {
          text: 'En otro momento',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Continuar',
          handler: () => {
            this.router.navigate(['/animacion9']);
          }
        }
      ]
    });

    await alert.present();
  }
}
