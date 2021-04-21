import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAventura4PageRoutingModule } from './tipo-aventura4-routing.module';

import { TipoAventura4Page } from './tipo-aventura4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAventura4PageRoutingModule
  ],
  declarations: [TipoAventura4Page]
})
export class TipoAventura4PageModule {}
