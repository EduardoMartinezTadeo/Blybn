import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menutabs2PageRoutingModule } from './menutabs2-routing.module';

import { Menutabs2Page } from './menutabs2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menutabs2PageRoutingModule
  ],
  declarations: [Menutabs2Page]
})
export class Menutabs2PageModule {}
