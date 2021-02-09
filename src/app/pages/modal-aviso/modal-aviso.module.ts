import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAvisoPageRoutingModule } from './modal-aviso-routing.module';

import { ModalAvisoPage } from './modal-aviso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAvisoPageRoutingModule
  ],
  declarations: [ModalAvisoPage]
})
export class ModalAvisoPageModule {}
