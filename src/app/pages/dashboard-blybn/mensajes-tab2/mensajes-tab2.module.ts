import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesTab2PageRoutingModule } from './mensajes-tab2-routing.module';

import { MensajesTab2Page } from './mensajes-tab2.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesTab2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [MensajesTab2Page]
})
export class MensajesTab2PageModule {}
