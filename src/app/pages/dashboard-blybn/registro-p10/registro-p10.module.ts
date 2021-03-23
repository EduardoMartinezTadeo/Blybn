import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP10PageRoutingModule } from './registro-p10-routing.module';

import { RegistroP10Page } from './registro-p10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP10PageRoutingModule
  ],
  declarations: [RegistroP10Page]
})
export class RegistroP10PageModule {}
