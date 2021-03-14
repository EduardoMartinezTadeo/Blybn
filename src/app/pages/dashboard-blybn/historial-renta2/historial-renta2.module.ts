import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialRenta2PageRoutingModule } from './historial-renta2-routing.module';

import { HistorialRenta2Page } from './historial-renta2.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialRenta2PageRoutingModule
  ],
  declarations: [HistorialRenta2Page]
})
export class HistorialRenta2PageModule {}
