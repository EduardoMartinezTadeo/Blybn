import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP6r11PageRoutingModule } from './registro-p6r11-routing.module';

import { RegistroP6r11Page } from './registro-p6r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP6r11PageRoutingModule
  ],
  declarations: [RegistroP6r11Page]
})
export class RegistroP6r11PageModule {}
