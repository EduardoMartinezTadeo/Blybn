import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop6PageRoutingModule } from './registrop6-routing.module';

import { Registrop6Page } from './registrop6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop6PageRoutingModule
  ],
  declarations: [Registrop6Page]
})
export class Registrop6PageModule {}
