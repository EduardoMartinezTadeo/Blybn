import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ajustes2PageRoutingModule } from './ajustes2-routing.module';

import { Ajustes2Page } from './ajustes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ajustes2PageRoutingModule
  ],
  declarations: [Ajustes2Page]
})
export class Ajustes2PageModule {}
