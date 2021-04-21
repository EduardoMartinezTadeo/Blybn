import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAventura3PageRoutingModule } from './tipo-aventura3-routing.module';

import { TipoAventura3Page } from './tipo-aventura3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAventura3PageRoutingModule
  ],
  declarations: [TipoAventura3Page]
})
export class TipoAventura3PageModule {}
