import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb02PageRoutingModule } from './animacionb02-routing.module';

import { Animacionb02Page } from './animacionb02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb02PageRoutingModule
  ],
  declarations: [Animacionb02Page]
})
export class Animacionb02PageModule {}
