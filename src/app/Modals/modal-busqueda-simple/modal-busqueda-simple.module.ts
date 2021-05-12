import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBusquedaSimplePageRoutingModule } from './modal-busqueda-simple-routing.module';

import { ModalBusquedaSimplePage } from './modal-busqueda-simple.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBusquedaSimplePageRoutingModule,
    CalendarModule
  ],
  declarations: [ModalBusquedaSimplePage]
})
export class ModalBusquedaSimplePageModule {}
