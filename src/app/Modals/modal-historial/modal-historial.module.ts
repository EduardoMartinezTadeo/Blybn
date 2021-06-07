import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHistorialPageRoutingModule } from './modal-historial-routing.module';

import { ModalHistorialPage } from './modal-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHistorialPageRoutingModule
  ],
  declarations: [ModalHistorialPage]
})
export class ModalHistorialPageModule {}
