import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion6PageRoutingModule } from './animacion6-routing.module';

import { Animacion6Page } from './animacion6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion6PageRoutingModule
  ],
  declarations: [Animacion6Page]
})
export class Animacion6PageModule {}
