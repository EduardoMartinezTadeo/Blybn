import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop7r11PageRoutingModule } from './registrop7r11-routing.module';

import { Registrop7r11Page } from './registrop7r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop7r11PageRoutingModule
  ],
  declarations: [Registrop7r11Page]
})
export class Registrop7r11PageModule {}
