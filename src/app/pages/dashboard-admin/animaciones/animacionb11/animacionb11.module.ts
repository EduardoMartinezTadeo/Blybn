import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb11PageRoutingModule } from './animacionb11-routing.module';

import { Animacionb11Page } from './animacionb11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb11PageRoutingModule
  ],
  declarations: [Animacionb11Page]
})
export class Animacionb11PageModule {}
