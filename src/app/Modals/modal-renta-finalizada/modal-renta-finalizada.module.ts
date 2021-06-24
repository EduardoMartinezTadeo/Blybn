import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRentaFinalizadaPageRoutingModule } from './modal-renta-finalizada-routing.module';

import { ModalRentaFinalizadaPage } from './modal-renta-finalizada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRentaFinalizadaPageRoutingModule
  ],
  declarations: [ModalRentaFinalizadaPage]
})
export class ModalRentaFinalizadaPageModule {}
