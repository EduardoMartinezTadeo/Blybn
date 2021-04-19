import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP8r1PageRoutingModule } from './registro-p8r1-routing.module';

import { RegistroP8r1Page } from './registro-p8r1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP8r1PageRoutingModule
  ],
  declarations: [RegistroP8r1Page]
})
export class RegistroP8r1PageModule {}
