import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoPago2PageRoutingModule } from './metodo-pago2-routing.module';

import { MetodoPago2Page } from './metodo-pago2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoPago2PageRoutingModule
  ],
  declarations: [MetodoPago2Page]
})
export class MetodoPago2PageModule {}
