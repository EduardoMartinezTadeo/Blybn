import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRentaStatusPageRoutingModule } from './modal-renta-status-routing.module';

import { ModalRentaStatusPage } from './modal-renta-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRentaStatusPageRoutingModule
  ],
  declarations: [ModalRentaStatusPage]
})
export class ModalRentaStatusPageModule {}
