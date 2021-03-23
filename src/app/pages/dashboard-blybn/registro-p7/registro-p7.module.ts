import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP7PageRoutingModule } from './registro-p7-routing.module';

import { RegistroP7Page } from './registro-p7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP7PageRoutingModule
  ],
  declarations: [RegistroP7Page]
})
export class RegistroP7PageModule {}
