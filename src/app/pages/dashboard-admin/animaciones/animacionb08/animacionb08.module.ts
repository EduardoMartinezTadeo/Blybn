import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb08PageRoutingModule } from './animacionb08-routing.module';

import { Animacionb08Page } from './animacionb08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb08PageRoutingModule
  ],
  declarations: [Animacionb08Page]
})
export class Animacionb08PageModule {}
