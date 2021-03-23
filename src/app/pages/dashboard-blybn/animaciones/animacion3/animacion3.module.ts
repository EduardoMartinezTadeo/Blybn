import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion3PageRoutingModule } from './animacion3-routing.module';

import { Animacion3Page } from './animacion3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion3PageRoutingModule
  ],
  declarations: [Animacion3Page]
})
export class Animacion3PageModule {}
