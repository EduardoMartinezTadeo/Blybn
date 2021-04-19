import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacionb12PageRoutingModule } from './animacionb12-routing.module';

import { Animacionb12Page } from './animacionb12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacionb12PageRoutingModule
  ],
  declarations: [Animacionb12Page]
})
export class Animacionb12PageModule {}
