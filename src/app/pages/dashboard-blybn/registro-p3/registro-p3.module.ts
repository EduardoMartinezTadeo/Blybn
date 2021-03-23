import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP3PageRoutingModule } from './registro-p3-routing.module';

import { RegistroP3Page } from './registro-p3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP3PageRoutingModule
  ],
  declarations: [RegistroP3Page]
})
export class RegistroP3PageModule {}
