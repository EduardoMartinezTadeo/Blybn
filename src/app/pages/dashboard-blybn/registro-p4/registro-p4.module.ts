import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP4PageRoutingModule } from './registro-p4-routing.module';

import { RegistroP4Page } from './registro-p4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP4PageRoutingModule
  ],
  declarations: [RegistroP4Page]
})
export class RegistroP4PageModule {}
