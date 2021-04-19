import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb03PageRoutingModule } from './animacionb03-routing.module';

import { Animacionb03Page } from './animacionb03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb03PageRoutingModule
  ],
  declarations: [Animacionb03Page]
})
export class Animacionb03PageModule {}
