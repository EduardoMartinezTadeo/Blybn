import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion9PageRoutingModule } from './animacion9-routing.module';

import { Animacion9Page } from './animacion9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion9PageRoutingModule
  ],
  declarations: [Animacion9Page]
})
export class Animacion9PageModule {}
