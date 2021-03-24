import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop8r1PageRoutingModule } from './registrop8r1-routing.module';

import { Registrop8r1Page } from './registrop8r1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop8r1PageRoutingModule
  ],
  declarations: [Registrop8r1Page]
})
export class Registrop8r1PageModule {}
