import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion11PageRoutingModule } from './animacion11-routing.module';

import { Animacion11Page } from './animacion11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion11PageRoutingModule
  ],
  declarations: [Animacion11Page]
})
export class Animacion11PageModule {}
