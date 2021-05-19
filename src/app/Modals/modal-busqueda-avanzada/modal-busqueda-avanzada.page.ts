import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar'
import { LoadingController } from '@ionic/angular';
import { ModalBusquedaErrorPage } from '../modal-busqueda-error/modal-busqueda-error.page';
@Component({
  selector: 'app-modal-busqueda-avanzada',
  templateUrl: './modal-busqueda-avanzada.page.html',
  styleUrls: ['./modal-busqueda-avanzada.page.scss'],
})
export class ModalBusquedaAvanzadaPage implements OnInit {
  dateRange: { from: string; to: string; };
  type: 'string';
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  constructor(
    private modalController: ModalController,
    private loadingControlloer: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

  cantidadAdultos: number = 0;
  cantidadHabitacion: number = 0;
  porcentaje: number = 0;

  incrementarAdultos(){
    if (this.cantidadAdultos == undefined) {
      this.cantidadAdultos = 1;
    } else if (this.cantidadAdultos != undefined) {
      ++this.cantidadAdultos;
    }
  }

  retirarAdultos(){
    if (this.cantidadAdultos == undefined) {
      this.cantidadAdultos = 0;
    } else if (
      this.cantidadAdultos != undefined &&
      this.cantidadAdultos > 0
    ) {
      --this.cantidadAdultos;
    }
  }

  retirarCuartos(){
    if (this.cantidadHabitacion == undefined) {
      this.cantidadHabitacion = 0;
    } else if (
      this.cantidadHabitacion != undefined &&
      this.cantidadHabitacion > 0
    ) {
      --this.cantidadHabitacion;
    }
  }

  incrementarCuartos(){
    if (this.cantidadHabitacion == undefined) {
      this.cantidadHabitacion = 1;
    } else if (this.cantidadHabitacion != undefined) {
      ++this.cantidadHabitacion;
    }
  }

  rangeChange( event ) {
    this.porcentaje = event.detail.value / 10000;
  }

  responseData: any;

  async presentLoadingWithOptions() {
    const loading = await this.loadingControlloer.create({
      message: 'Espere un momento',
      mode: 'ios',
      spinner: 'bubbles',
      duration: 1500
    });
    await loading.present();
    setTimeout(() => {
      this.mostrarModalSinResultado();
    },1600)
  }

  async mostrarModalSinResultado() {
    const modal = await this.modalCtrl.create({
      component: ModalBusquedaErrorPage
    });
    await modal.present();
  }
}
