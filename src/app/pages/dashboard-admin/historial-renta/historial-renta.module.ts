import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialRentaPageRoutingModule } from './historial-renta-routing.module';

import { HistorialRentaPage } from './historial-renta.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialRentaPageRoutingModule
  ],
  declarations: [HistorialRentaPage]
})
export class HistorialRentaPageModule {}
