import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialRentaPageRoutingModule } from './historial-renta-routing.module';

import { HistorialRentaPage } from './historial-renta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialRentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistorialRentaPage]
})
export class HistorialRentaPageModule {}
