import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb04PageRoutingModule } from './animacionb04-routing.module';

import { Animacionb04Page } from './animacionb04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb04PageRoutingModule
  ],
  declarations: [Animacionb04Page]
})
export class Animacionb04PageModule {}
