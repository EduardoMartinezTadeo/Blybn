import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP8PageRoutingModule } from './registro-p8-routing.module';

import { RegistroP8Page } from './registro-p8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP8PageRoutingModule
  ],
  declarations: [RegistroP8Page]
})
export class RegistroP8PageModule {}
