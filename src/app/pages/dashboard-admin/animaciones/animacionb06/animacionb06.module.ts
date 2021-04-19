import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb06PageRoutingModule } from './animacionb06-routing.module';

import { Animacionb06Page } from './animacionb06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb06PageRoutingModule
  ],
  declarations: [Animacionb06Page]
})
export class Animacionb06PageModule {}
