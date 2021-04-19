import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb05PageRoutingModule } from './animacionb05-routing.module';

import { Animacionb05Page } from './animacionb05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb05PageRoutingModule
  ],
  declarations: [Animacionb05Page]
})
export class Animacionb05PageModule {}
