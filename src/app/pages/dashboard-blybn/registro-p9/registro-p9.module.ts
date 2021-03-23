import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP9PageRoutingModule } from './registro-p9-routing.module';

import { RegistroP9Page } from './registro-p9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP9PageRoutingModule
  ],
  declarations: [RegistroP9Page]
})
export class RegistroP9PageModule {}
