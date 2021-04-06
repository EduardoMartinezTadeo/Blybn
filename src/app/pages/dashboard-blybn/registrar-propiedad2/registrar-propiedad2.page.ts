import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-registrar-propiedad2',
  templateUrl: './registrar-propiedad2.page.html',
  styleUrls: ['./registrar-propiedad2.page.scss'],
})
export class RegistrarPropiedad2Page implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) {}

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
  public dato18: boolean = false;

  public dato19: boolean = true;
  public dato20: boolean = false;

  public dato21: boolean = true;
  public dato22: boolean = false;

  public dato23: boolean = false;

  parteR1: any;
  salir() {
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.dataPerfil = res;
      this.id_usuario = this.dataPerfil.bly_usuario;
    });
  }

  resultadoR1;
  boton1: boolean;

  registrop1() {
    this.storage.get('registroP1').then((res) => {
      this.resultadoR1 = res;
      this.boton1 = this.resultadoR1.registro1;
    });
    if (this.boton1 == false) {
      this.router.navigate(['/animacion1']);
      this.dato1 = false;
      this.dato2 = true;
    } else if (this.boton1 == true) {
      this.dato1 = false;
      this.dato2 = true;
    }
  }

  resultadoR2;
  boton2: boolean;
  registrop2() {
    this.storage.get('registroP2').then((res) => {
      this.resultadoR2 = res;
      this.boton2 = this.resultadoR2.registro2;
    });
    if (this.boton2 == false) {
      this.router.navigate(['/animacion2']);
      this.dato3 = false;
      this.dato4 = true;
    } else if (this.boton2 == true) {
      this.dato3 = false;
      this.dato4 = true;
    }
  }

  resultadoR3;
  boton3: boolean;
  registrop3() {
    this.storage.get('registroP3').then((res) => {
      this.resultadoR3 = res;
      this.boton3 = this.resultadoR3.registro3;
    });
    if (this.boton3 == false) {
      this.router.navigate(['/animacion3']);
      this.dato5 = false;
      this.dato6 = true;
    } else if (this.boton3 == true) {
      this.dato5 = false;
      this.dato6 = true;
    }
  }

  resultadoR4;
  boton4: boolean;
  registrop4() {
    this.storage.get('registroP4').then((res) => {
      this.resultadoR4 = res;
      this.boton4 = this.resultadoR4.registro4;
    });
    if (this.boton4 == false) {
      this.router.navigate(['/animacion4']);
      this.dato7 = false;
      this.dato8 = true;
    } else if (this.boton4 == true) {
      this.dato7 = false;
      this.dato8 = true;
    }
  }

  resultadoR5;
  boton5: boolean;
  registrop5() {
    this.storage.get('registroP5').then((res) => {
      this.resultadoR5 = res;
      this.boton5 = this.resultadoR5.registro5;
    });
    if (this.boton5 == false) {
      this.router.navigate(['/animacion5']);
      this.dato9 = false;
      this.dato10 = true;
    } else if (this.boton5 == true) {
      this.dato9 = false;
      this.dato10 = true;
    }
  }

  resultadoR6;
  boton6: boolean;
  registrop6() {
    this.storage.get('registroP6').then((res) => {
      this.resultadoR6 = res;
      this.boton6 = this.resultadoR6.registro6;
    });
    if (this.boton6 == false) {
      this.router.navigate(['/animacion6']);
      this.dato11 = false;
      this.dato12 = true;
    } else if (this.boton6 == true) {
      this.dato11 = false;
      this.dato12 = true;
    }
  }

  resultadoR7;
  boton7: boolean;
  registrop7() {
    this.storage.get('registroP7').then((res) => {
      this.resultadoR7 = res;
      this.boton7 = this.resultadoR7.registro7;
    });
    if (this.boton7 == false) {
      this.router.navigate(['/animacion7']);
      this.dato13 = false;
      this.dato14 = true;
    } else if (this.boton7 == true) {
      this.dato13 = false;
      this.dato14 = true;
    }
  }

  resultadoR8;
  boton8: boolean;
  registrop8() {
    this.storage.get('registroP8').then((res) => {
      this.resultadoR8 = res;
      this.boton8 = this.resultadoR8.registro8;
    });
    if (this.boton8 == false) {
      this.router.navigate(['/animacion8']);
      this.dato15 = false;
      this.dato16 = true;
    } else if (this.boton8 == true) {
      this.dato15 = false;
      this.dato16 = true;
    }
  }

  resultadoR9;
  boton9: boolean;
  registrop9() {
    this.storage.get('registroP9').then((res) => {
      this.resultadoR9 = res;
      this.boton9 = this.resultadoR9.registro9;
    });
    if (this.boton9 == false) {
      this.router.navigate(['/animacion9']);
      this.dato17 = false;
      this.dato18 = true;
    } else if (this.boton9 == true) {
      this.dato17 = false;
      this.dato18 = true;
      this.dato23 = true;
    }
  }

  resultadoR10;
  boton10: boolean;
  registrop10() {
    this.storage.get('registroP10').then((res) => {
      this.resultadoR10 = res;
      this.boton10 = this.resultadoR10.registro10;
    });
    if (this.boton10 == false) {
      this.router.navigate(['/animacion10']);
      this.dato19 = false;
      this.dato20 = true;
    } else if (this.boton10 == true) {
      this.dato19 = false;
      this.dato20 = true;
    }
  }

  resultadoR11;
  boton11: boolean;
  registrop11() {
    this.storage.get('registroP11').then((res) => {
      this.resultadoR11 = res;
      this.boton11 = this.resultadoR11.registro11;
    });
    if (this.boton11 == false) {
      this.router.navigate(['/animacion11']);
      this.dato21 = false;
      this.dato22 = true;
    } else if (this.boton11 == true) {
      this.dato21 = false;
      this.dato22 = true;
    }
  }

  registroFinal(){
    this.router.navigate(['/animacion12']);
  }

  async alertEspera() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Aviso',
      subHeader: 'Registro en proceso...',
      message:
        'Para editar la información o registrar una propiedad nueva, termine el registro actual que se encuentra en proceso.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
