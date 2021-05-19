import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPagoFallidoPageRoutingModule } from './modal-pago-fallido-routing.module';

import { ModalPagoFallidoPage } from './modal-pago-fallido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPagoFallidoPageRoutingModule
  ],
  declarations: [ModalPagoFallidoPage]
})
export class ModalPagoFallidoPageModule {}
