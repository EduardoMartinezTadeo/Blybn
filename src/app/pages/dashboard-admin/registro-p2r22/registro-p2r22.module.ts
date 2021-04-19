import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroP2r22PageRoutingModule } from './registro-p2r22-routing.module';

import { RegistroP2r22Page } from './registro-p2r22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroP2r22PageRoutingModule
  ],
  declarations: [RegistroP2r22Page]
})
export class RegistroP2r22PageModule {}
