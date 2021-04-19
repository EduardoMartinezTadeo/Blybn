import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop1PageRoutingModule } from './registrop1-routing.module';

import { Registrop1Page } from './registrop1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop1PageRoutingModule
  ],
  declarations: [Registrop1Page]
})
export class Registrop1PageModule {}
