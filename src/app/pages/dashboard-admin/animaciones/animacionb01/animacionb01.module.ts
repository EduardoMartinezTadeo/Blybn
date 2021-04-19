import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb01PageRoutingModule } from './animacionb01-routing.module';

import { Animacionb01Page } from './animacionb01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb01PageRoutingModule
  ],
  declarations: [Animacionb01Page]
})
export class Animacionb01PageModule {}
