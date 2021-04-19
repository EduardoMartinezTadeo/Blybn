import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop2r11PageRoutingModule } from './registrop2r11-routing.module';

import { Registrop2r11Page } from './registrop2r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop2r11PageRoutingModule
  ],
  declarations: [Registrop2r11Page]
})
export class Registrop2r11PageModule {}
