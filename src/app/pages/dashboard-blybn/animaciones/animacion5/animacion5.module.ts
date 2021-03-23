import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion5PageRoutingModule } from './animacion5-routing.module';

import { Animacion5Page } from './animacion5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion5PageRoutingModule
  ],
  declarations: [Animacion5Page]
})
export class Animacion5PageModule {}
