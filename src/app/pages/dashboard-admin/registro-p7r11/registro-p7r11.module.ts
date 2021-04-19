import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP7r11PageRoutingModule } from './registro-p7r11-routing.module';

import { RegistroP7r11Page } from './registro-p7r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP7r11PageRoutingModule
  ],
  declarations: [RegistroP7r11Page]
})
export class RegistroP7r11PageModule {}
