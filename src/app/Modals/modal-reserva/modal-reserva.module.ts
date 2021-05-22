import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalReservaPageRoutingModule } from './modal-reserva-routing.module';

import { ModalReservaPage } from './modal-reserva.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalReservaPageRoutingModule,
    CalendarModule,
  ],
  declarations: [ModalReservaPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }],
})
export class ModalReservaPageModule {}
