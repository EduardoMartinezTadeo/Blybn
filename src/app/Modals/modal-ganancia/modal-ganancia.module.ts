import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGananciaPageRoutingModule } from './modal-ganancia-routing.module';

import { ModalGananciaPage } from './modal-ganancia.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGananciaPageRoutingModule,
    ChartsModule
  ],
  declarations: [ModalGananciaPage]
})
export class ModalGananciaPageModule {}
