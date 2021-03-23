import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP2PageRoutingModule } from './registro-p2-routing.module';

import { RegistroP2Page } from './registro-p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP2PageRoutingModule
  ],
  declarations: [RegistroP2Page]
})
export class RegistroP2PageModule {}
