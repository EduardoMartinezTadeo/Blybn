import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP5PageRoutingModule } from './registro-p5-routing.module';

import { RegistroP5Page } from './registro-p5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP5PageRoutingModule
  ],
  declarations: [RegistroP5Page]
})
export class RegistroP5PageModule {}
