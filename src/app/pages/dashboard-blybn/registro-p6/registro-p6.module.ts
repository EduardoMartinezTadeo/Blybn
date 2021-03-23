import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP6PageRoutingModule } from './registro-p6-routing.module';

import { RegistroP6Page } from './registro-p6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP6PageRoutingModule
  ],
  declarations: [RegistroP6Page]
})
export class RegistroP6PageModule {}
