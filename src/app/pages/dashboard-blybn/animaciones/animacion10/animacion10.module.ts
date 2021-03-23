import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion10PageRoutingModule } from './animacion10-routing.module';

import { Animacion10Page } from './animacion10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion10PageRoutingModule
  ],
  declarations: [Animacion10Page]
})
export class Animacion10PageModule {}
