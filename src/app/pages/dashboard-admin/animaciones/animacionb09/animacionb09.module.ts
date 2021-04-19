import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb09PageRoutingModule } from './animacionb09-routing.module';

import { Animacionb09Page } from './animacionb09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb09PageRoutingModule
  ],
  declarations: [Animacionb09Page]
})
export class Animacionb09PageModule {}
