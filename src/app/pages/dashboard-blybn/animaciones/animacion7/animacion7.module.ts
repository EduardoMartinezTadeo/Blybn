import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion7PageRoutingModule } from './animacion7-routing.module';

import { Animacion7Page } from './animacion7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion7PageRoutingModule
  ],
  declarations: [Animacion7Page]
})
export class Animacion7PageModule {}
