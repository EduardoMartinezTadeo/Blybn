import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP2r11PageRoutingModule } from './registro-p2r11-routing.module';

import { RegistroP2r11Page } from './registro-p2r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP2r11PageRoutingModule
  ],
  declarations: [RegistroP2r11Page]
})
export class RegistroP2r11PageModule {}
