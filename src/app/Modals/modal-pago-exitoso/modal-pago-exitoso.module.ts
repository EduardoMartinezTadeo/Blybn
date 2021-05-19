import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPagoExitosoPageRoutingModule } from './modal-pago-exitoso-routing.module';

import { ModalPagoExitosoPage } from './modal-pago-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPagoExitosoPageRoutingModule
  ],
  declarations: [ModalPagoExitosoPage]
})
export class ModalPagoExitosoPageModule {}
