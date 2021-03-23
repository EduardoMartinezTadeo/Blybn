import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP1PageRoutingModule } from './registro-p1-routing.module';

import { RegistroP1Page } from './registro-p1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP1PageRoutingModule
  ],
  declarations: [RegistroP1Page]
})
export class RegistroP1PageModule {}
