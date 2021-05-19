import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalReservaPageRoutingModule } from './modal-reserva-routing.module';

import { ModalReservaPage } from './modal-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalReservaPageRoutingModule
  ],
  declarations: [ModalReservaPage]
})
export class ModalReservaPageModule {}
