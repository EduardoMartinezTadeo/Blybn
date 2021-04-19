import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb07PageRoutingModule } from './animacionb07-routing.module';

import { Animacionb07Page } from './animacionb07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb07PageRoutingModule
  ],
  declarations: [Animacionb07Page]
})
export class Animacionb07PageModule {}
