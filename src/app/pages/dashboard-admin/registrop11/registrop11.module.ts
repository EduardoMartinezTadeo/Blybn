import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop11PageRoutingModule } from './registrop11-routing.module';

import { Registrop11Page } from './registrop11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop11PageRoutingModule
  ],
  declarations: [Registrop11Page]
})
export class Registrop11PageModule {}
