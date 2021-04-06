import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion12PageRoutingModule } from './animacion12-routing.module';

import { Animacion12Page } from './animacion12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion12PageRoutingModule
  ],
  declarations: [Animacion12Page]
})
export class Animacion12PageModule {}
