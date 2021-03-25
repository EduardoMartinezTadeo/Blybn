import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop6r11PageRoutingModule } from './registrop6r11-routing.module';

import { Registrop6r11Page } from './registrop6r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop6r11PageRoutingModule
  ],
  declarations: [Registrop6r11Page]
})
export class Registrop6r11PageModule {}
