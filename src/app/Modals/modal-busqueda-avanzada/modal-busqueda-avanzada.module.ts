import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBusquedaAvanzadaPageRoutingModule } from './modal-busqueda-avanzada-routing.module';

import { ModalBusquedaAvanzadaPage } from './modal-busqueda-avanzada.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBusquedaAvanzadaPageRoutingModule,
    CalendarModule
  ],
  declarations: [ModalBusquedaAvanzadaPage]
})
export class ModalBusquedaAvanzadaPageModule {}
