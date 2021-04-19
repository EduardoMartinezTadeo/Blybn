import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb10PageRoutingModule } from './animacionb10-routing.module';

import { Animacionb10Page } from './animacionb10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb10PageRoutingModule
  ],
  declarations: [Animacionb10Page]
})
export class Animacionb10PageModule {}
