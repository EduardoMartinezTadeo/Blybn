import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesTabPageRoutingModule } from './mensajes-tab-routing.module';

import { MensajesTabPage } from './mensajes-tab.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesTabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MensajesTabPage]
})
export class MensajesTabPageModule {}
