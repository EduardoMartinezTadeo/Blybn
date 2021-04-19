import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop8PageRoutingModule } from './registrop8-routing.module';

import { Registrop8Page } from './registrop8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop8PageRoutingModule
  ],
  declarations: [Registrop8Page]
})
export class Registrop8PageModule {}
