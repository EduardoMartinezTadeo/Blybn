import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion4PageRoutingModule } from './animacion4-routing.module';

import { Animacion4Page } from './animacion4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion4PageRoutingModule
  ],
  declarations: [Animacion4Page]
})
export class Animacion4PageModule {}
