import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop4PageRoutingModule } from './registrop4-routing.module';

import { Registrop4Page } from './registrop4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop4PageRoutingModule
  ],
  declarations: [Registrop4Page]
})
export class Registrop4PageModule {}
