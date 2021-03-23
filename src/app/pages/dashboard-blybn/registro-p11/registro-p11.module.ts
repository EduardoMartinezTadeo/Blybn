import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP11PageRoutingModule } from './registro-p11-routing.module';

import { RegistroP11Page } from './registro-p11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP11PageRoutingModule
  ],
  declarations: [RegistroP11Page]
})
export class RegistroP11PageModule {}
