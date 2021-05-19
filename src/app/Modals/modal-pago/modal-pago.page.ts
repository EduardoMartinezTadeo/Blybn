import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPagoExitosoPage } from '../modal-pago-exitoso/modal-pago-exitoso.page';
import { ModalPagoFallidoPage } from '../modal-pago-fallido/modal-pago-fallido.page';

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.page.html',
  styleUrls: ['./modal-pago.page.scss'],
})
export class ModalPagoPage implements OnInit {
  favorito: boolean = false;
  favorito2: boolean = false;
  favorito3: boolean = false;

  constructor(private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {}

  salir() {
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

  onClick() {
    this.favorito = !this.favorito;
    this.modalCtrl.dismiss();
    this.mostrarModalPagoExitoso();
  }

  onClick2() {
    this.favorito2 = !this.favorito2;
    this.modalCtrl.dismiss();
    this.mostrarModalPagoFallido();
  }
  onClick3() {
    this.favorito3 = !this.favorito3;
    this.modalCtrl.dismiss();
    this.mostrarModalPagoExitoso();
  }

  async mostrarModalPagoExitoso() {
    const modal = await this.modalCtrl.create({
      component: ModalPagoExitosoPage,
    });
    await modal.present();
  }

  async mostrarModalPagoFallido() {
    const modal = await this.modalCtrl.create({
      component: ModalPagoFallidoPage,
    });
    await modal.present();
  }
}
