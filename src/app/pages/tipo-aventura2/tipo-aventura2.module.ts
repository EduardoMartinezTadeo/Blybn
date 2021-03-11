import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAventura2PageRoutingModule } from './tipo-aventura2-routing.module';

import { TipoAventura2Page } from './tipo-aventura2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAventura2PageRoutingModule
  ],
  declarations: [TipoAventura2Page]
})
export class TipoAventura2PageModule {}
