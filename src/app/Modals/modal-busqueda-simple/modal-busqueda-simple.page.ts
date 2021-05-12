import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
@Component({
  selector: 'app-modal-busqueda-simple',
  templateUrl: './modal-busqueda-simple.page.html',
  styleUrls: ['./modal-busqueda-simple.page.scss'],
})
export class ModalBusquedaSimplePage implements OnInit {
  dateRange: { from: string; to: string; };
  type: 'string';

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

   salir(){
    this.modalController.dismiss();
  }

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

}
