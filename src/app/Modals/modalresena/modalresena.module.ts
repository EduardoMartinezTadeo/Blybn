import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalresenaPageRoutingModule } from './modalresena-routing.module';

import { ModalresenaPage } from './modalresena.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalresenaPageRoutingModule,
    CalendarModule,
  ],
  declarations: [ModalresenaPage],
})
export class ModalresenaPageModule {}
