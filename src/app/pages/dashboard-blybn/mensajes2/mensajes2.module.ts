import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mensajes2PageRoutingModule } from './mensajes2-routing.module';

import { Mensajes2Page } from './mensajes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mensajes2PageRoutingModule
  ],
  declarations: [Mensajes2Page]
})
export class Mensajes2PageModule {}
