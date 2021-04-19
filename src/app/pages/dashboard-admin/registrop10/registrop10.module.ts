import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop10PageRoutingModule } from './registrop10-routing.module';

import { Registrop10Page } from './registrop10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop10PageRoutingModule
  ],
  declarations: [Registrop10Page]
})
export class Registrop10PageModule {}
