import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-registrop6r11',
  templateUrl: './registrop6r11.page.html',
  styleUrls: ['./registrop6r11.page.scss'],
})
export class Registrop6r11Page implements OnInit {
  currentPosition;
  height;
  minimumThreshold;
  startPosition;

  constructor(
    private router: Router, 
    private provider: ProviderService,
    private storage: Storage) {}

  ngOnInit() {
    this.close();
  }

  informacionRestriccion = [];
  onClick(restriccion: any){ 
    this.informacionRestriccion.push(restriccion);
  }

  contentLoaded = false;
  ionViewWillLeave() {
    this.restriciones = [];
    this.cargarRestricciones();
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500);
  }

  ionViewWillEnter() {
    this.restriciones = [];
    this.cargarRestricciones();
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2500);
  }

  cancelar() {
    this.router.navigate(['/registro-p6']);
    this.restriciones = [];
  }


  informacionR6: any;
  guardarInformacion() {
    this.informacionR6 = {
      restriccion: this.informacionRestriccion,
      registro6: true
    }
    this.storage.set('registroP6', this.informacionR6).then((res) => {
      this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
      this.restriciones = [];
    });
  }

  open() {
    (<HTMLStyleElement>document.querySelector('.bottomSheet')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bg')).style.display = 'block';
  }

  close() {
    this.currentPosition = 0;
    this.startPosition = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheet')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>document.querySelector('.bottomSheet')).style.transform =
      'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bg')).style.display = 'none';
  }

  touchMove(evt: TouchEvent) {
    if (this.startPosition == 0) {
      this.startPosition = evt.touches[0].clientY;
    }

    this.height = document.querySelector('.bottomSheet').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPosition = y - this.startPosition;

    if (this.currentPosition > 0 && this.startPosition > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheet')
      )).style.transform =
        'translate3d(0px,' + this.currentPosition + 'px,0px)';
    }
  }

  touchEnd() {
    this.minimumThreshold = this.height - 150;

    if (this.currentPosition < this.minimumThreshold) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheet')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.close();
    }
  }

  restriciones: any = [];
  cargarRestricciones() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'restriccion',
      };
      this.provider
        .postDataCRP(body, 'db_cargarRestricciones.php')
        .subscribe((data) => {
          for (let restriccion of data.result) {
            this.restriciones.push(restriccion);
          }
          resolve(true);
        });
    });
  }
}
